# frozen_string_literal: true

# Bump this to issue a Rails update
rails_version = "7.0.7.1"

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.3.6"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "actionmailer", rails_version
gem "actionpack", rails_version
gem "actionview", rails_version
gem "activemodel", rails_version
gem "activerecord", rails_version
gem "activesupport", rails_version
gem "rails", rails_version
gem "railties", rails_version

# Use SCSS for stylesheets
gem "sass-rails"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use sqlite3 as the database for Active Record
gem "sqlite3", "~> 1.4"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.6"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "brakeman", "~> 5.1", require: false # A static analysis security vulnerability scanner for Ruby on Rails applications
  gem "debug", platforms: %i[mri mingw x64_mingw]
  gem "factory_bot_rails"
  gem "faker"
  gem "rspec-rails", "~> 5.0"
  gem "rubocop", "~> 1.30", require: false # Automatic Ruby code style checking tool
  gem "rubocop-performance", "~> 1.14", require: false # A collection of RuboCop cops to check for performance optimizations in Ruby code
  gem "rubocop-rails", "~> 2.14", require: false # Automatic Rails code style checking tool
  gem "rubocop-rspec", "~> 2.11", require: false # Code style checking for RSpec files
  gem "rails-controller-testing"
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"

  gem "listen", require: false
  gem "better_errors"
  gem "binding_of_caller"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end

gem "shakapacker", "= 7.0"

gem "rails-settings-cached", "~> 2.9"

gem "devise", "~> 4.9"

gem "devise_uid", "~> 0.1.1"

gem "rolify", "~> 6.0"

gem "message_bus"

# For multi-lingual app
gem "i18n-js", "~> 3"

gem "rack-mini-profiler", "~> 2.0"

gem "logster"

# Postgres on production
gem "pg", "~> 1.2"

gem "themoviedb-api", "~> 1.4"

gem "carrierwave", "~> 3.0"

gem "carrierwave-bombshelter", "~> 0.2.2"

gem "aws-sdk-s3", "~> 1"

gem "carrierwave-aws", "~> 1.6"

gem "erb-formatter", "~> 0.4.3"

gem "active_model_serializers", "~> 0.8.3"
gem "httparty", "~> 0.21.0"
gem "wdm", ">= 0.1.0", platforms: %i[mingw mswin x64_mingw jruby]

gem "sidekiq" # To run background jobs
# gem 'mini_scheduler' # To schedule background jobs
gem "sidekiq-scheduler"

gem "maxminddb" # To get user's location
gem "countries" # To get Countries information
gem "serviceworker-rails" # To add service worker
gem "pry", "~> 0.14.2"
gem "pry-rails"

gem 'doorkeeper'
gem 'doorkeeper-jwt'
