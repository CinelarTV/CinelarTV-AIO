# frozen_string_literal: true

module Admin
  class ContentsController < Admin::BaseController
    def find_recommended_metadata
      begin
        if SiteSetting.tmdb_api_key.blank?
          render json: { error: "TMDB API Key is not set" }, status: :unprocessable_entity
          return
        end

        if params[:title].blank?
          render json: { error: "Title is required" }, status: :unprocessable_entity
          return
        end

        # Get the TMDB API Key from the Site Settings
        api_key = SiteSetting.tmdb_api_key.strip
        # Initialize the TMDB API
        tmdb = Tmdb::Api.key(api_key)

        Tmdb::Api.language(SiteSetting.default_locale)

        Rails.logger.info("Using TMDB API Key: #{api_key}")

        @search = Tmdb::Search.multi(params[:title])
        # Render as JSON
        render json: {
                 data: @search.table,
                 config: @config.as_json,
               }
      rescue Tmdb::Error => e
        render json: { error: "Error occurred: #{e.message}" }, status: :unprocessable_entity
      rescue StandardError => e
        render json: { error: "An error occurred: #{e.message}" }, status: :unprocessable_entity
      end
    end

    def create
      @content = Content.new(content_params)
      handle_uploaded_images

      if @content.save
        render json: { message: "Content created successfully", status: :ok }
      else
        render json: { errors: @content.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      @content = Content.find(params[:id])
      respond_to do |format|
        format.html
        format.json do
          render json: {
                   data: @content.as_json,
                 }
        end
      end
    end

    def update
      @content = Content.find(params[:id])

      # Await the uploaded images
      handle_uploaded_images

      # Series can't have an url
      if @content.content_type == 'TVSHOW' && @content.url?
        @content.url = nil
      end


     
      if @content.save
        render json: { message: "Content updated successfully", status: :ok }
      else
        render json: { error: @content.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
    end

    def destroy
      @content = Content.find(params[:id])
      @content.destroy
      render json: { message: "Content deleted successfully", status: :ok }
    end

    def index
      @contents = Content.all
      respond_to do |format|
        format.html
        format.json do
          render json: {
                   data: @contents.as_json,
                 }
        end
      end
    end

    def handle_uploaded_images
      # Process banner image
      Rails.logger.info("Banner: #{params[:content][:banner]}")
    
      if @content.banner&.starts_with?("tmdb://")
        # Process TMDB reference here
        tmdb_id = @content.banner.sub("tmdb://", "")
        banner_url = "https://image.tmdb.org/t/p/original/#{tmdb_id}"
        uploader = ContentImageUploader.new
        uploader.download!(banner_url)
        @content.banner = uploader.url
      else
        # Process uploaded banner image here
        banner_uploader = ContentImageUploader.new
        banner_uploader.store!(params[:content][:banner])
        @content.banner = banner_uploader.url
        Rails.logger.info("Banner URL: #{banner_uploader.url}")
      end
    
      # Process cover image
      if @content.cover&.starts_with?("tmdb://")
        # Process TMDB reference here
        tmdb_id = @content.cover.sub("tmdb://", "")
        cover_url = "https://image.tmdb.org/t/p/original/#{tmdb_id}"
        uploader = ContentImageUploader.new
        uploader.download!(cover_url)
        @content.cover = uploader.url
      else
        # Process uploaded cover image here
        cover_uploader = ContentImageUploader.new
        cover_uploader.store!(params[:content][:cover])
        @content.cover = cover_uploader.url
        Rails.logger.info("Cover URL: #{cover_uploader.url}")
      end
    end
    

    private

    def content_params
      params.require(:content).permit(:title, :description, :banner, :cover, :content_type, :url, :year, category_ids: [])
    end

    def set_content
      @content = Content.find(params[:id])
    end
  end
end
