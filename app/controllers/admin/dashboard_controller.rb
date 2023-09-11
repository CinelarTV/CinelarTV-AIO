# frozen_string_literal: true

module Admin
  class DashboardController < Admin::BaseController
    include Admin::DashboardHelper

    def index
      data = {}
      @problems = []
      @problems << {
        content: "Your CinelarTV instance is not activated. Your customers will not be able to use the site until you activate it.",
        type: "critical",
        icon: "frown",
      } unless CinelarTV.valid_license?

      @problems << {
        content: "Looks like you haven't completed the setup wizard yet. You can complete it by going to the <a href='/wizard'>setup wizard</a>.",
        type: "info",
        icon: "sparkles",
      } unless SiteSetting.wizard_completed

      data[:problems] = @problems
      data[:version_check] = {
        installed_version: CinelarTV::Application::Version::FULL,
        installed_sha: CinelarTV.git_version,
        git_branch: CinelarTV.git_branch,
        last_commit_date: CinelarTV.last_commit_date,
        updates_available: CinelarTV::Updater.updates_available?,
        remote_version: CinelarTV::Updater.remote_version,
        versions_diff: CinelarTV::Updater.versions_diff,
        last_commit_message: CinelarTV::Updater.last_commit_message,
      }

      data[:statistics] = statistics

      respond_to do |format|
        format.html
        format.json do
          render json: data
        end
      end
    end

    def reports
      @reports = []

      report_types = {
        signups: "Signups",
        likes: "Likes",
      }

      report_types.each do |type, title|
        report = Report.new(type)
        report.title = title
        report.available_filters = {
          start_date: { type: :date, title: "Start Date" },
          end_date: { type: :date, title: "End Date" },
        }

        report.filters = {
          start_date: params[:start_date].presence || report.default_start_date,
          end_date: params[:end_date].presence || report.default_end_date,
        }

        report.start_date = report.filters[:start_date]
        report.end_date = report.filters[:end_date]
        report.labels = [
          { type: :date, property: :x, title: "Day" },
          { type: :number, property: :y, title: "Count" },
        ]

        case type
        when :likes
          report.data = Report.report_likes(report)
        when :signups
          report.data = Report.report_signups(report)
        end

        @reports << report
      end

      respond_to do |format|
        format.html
        format.json do
          render json: { statistics: @reports }
        end
      end
    end

    def site_settings
      @settings = SiteSetting.all
      render json: { site_settings: @settings }
    end

    private

    def admin?
      render status: 404 unless current_user.has_role?(:admin)
    end
  end
end
