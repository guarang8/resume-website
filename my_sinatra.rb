require 'sinatra'
require './rackmiddleware'
use RackMiddleware
get '/' do
  'Welcome to all'
end