require 'rack'
require 'rack/contrib/try_static'

use Rack::Head

# Serve files from the build directory
use Rack::TryStatic,
  root: 'build',
  urls: %w[/],
  try: ['.html', 'index.html', '/index.html']

# # Serve a 404 page if all else fails
# run lambda { |env|
#   [
#     404,
#     {
#       "Content-Type" => "text/html",
#       "Cache-Control" => "public, max-age=60"
#     },
#     File.open("build/404/index.html", File::RDONLY)
#   ]
# }
