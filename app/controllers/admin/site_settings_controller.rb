# frozen_string_literal: true

module Admin
  class SiteSettingsController < Admin::BaseController
    def index
      respond_to do |format|
        format.html
        format.json do
          site_settings = SiteSetting.defined_fields

          response = site_settings.each_with_object([]) do |setting, memo|
            memo << {
              key: setting[:key],
              category: setting[:scope],
              default: setting[:default],
              type: setting[:type],
              readonly: setting[:readonly],
              value: SiteSetting.send(setting[:key]),
              options: setting[:options],
            } unless setting[:options][:hidden]
          end

          render json: { site_settings: response }
        end
      end
    end

    def create
      @errors = []
      setting_params.keys.each do |key|
        next if setting_params[key].nil?

        if key == "site_logo"
          # Si el campo es el de la imagen del sitio, cargar y procesar la imagen
          logo_uploader = LogoUploader.new
          logo_uploader.store!(setting_params[key])
          # Store only the path of the image, because maybe the image is stored in S3, or using a CDN
          SiteSetting.send("#{key}=", logo_uploader.store_dir+logo_uploader.filename)
        else
          # Si no, actualizar el valor de la configuración
          setting = SiteSetting.new(var: key)
          setting.value = setting_params[key].strip
          unless setting.valid?
            @errors << setting.errors.full_messages
          end
        end
      end

      if @errors.any?
        render json: { error: @errors.to_sentence }, status: :unprocessable_entity
      else
        setting_params.keys.each do |key|
          # Si el campo es el de la imagen del sitio, ya lo actualizamos, por lo que no necesitamos hacer nada aquí
          next if key == "site_logo"
          puts "Setting #{key} to #{setting_params[key]}"
          @new_value = setting_params[key]

          puts "Setting #{key} to #{@new_value}"
          SiteSetting.send("#{key}=", @new_value) unless setting_params[key].nil?
        end

        update_carrierwave_setting if is_storage_related?(setting_params.keys)
        render json: { message: 'I18n.t("js.core.success_settings")' }, status: :ok
      end
    end

    private

    def setting_params
      params.require(:setting).permit(settings_keys.map(&:to_sym))
    end

    def settings_keys
      SiteSetting.keys
    end

    def is_storage_related?(params)
      @related_keys ||= %w[storage_provider s3_access_key_id s3_secret_access_key s3_bucket s3_region s3_endpoint]
      @related_keys.include?(params)
    end

    def update_carrierwave_setting
      BaseUploader.configure_storage
    end
  end
end
