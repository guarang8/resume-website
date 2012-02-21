require './contact-send'
#require './my_app'
#require 'sinatra'
#set :sender_email, 'manish.gauranga@gmail.com'
#set :receiver_email, 'manish.gauranga@gmail.com'
#require './rackmiddleware'
#use RackMiddleware
#require './my_sinatra'
#use Rack::Reloader

#run MyApp.new

run Sinatra::Application

