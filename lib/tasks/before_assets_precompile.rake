# frozen_string_literal: true

task :before_assets_precompile do
  # Export translations before precompiling assets
  warn "Exporting translations..."
  system("bundle exec rake i18n:js:export")

  warn "Compiling TailwindCSS styles..."
  system("yarn build:css")
end

# every time execute 'rake assets:precompile'
# run 'before_assets_precompile' first
Rake::Task["assets:precompile"].enhance ["before_assets_precompile"]
