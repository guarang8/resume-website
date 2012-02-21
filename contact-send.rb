#require 'sinatra'

#get '/index' do
 # index.html
#end

#post '/#contact' do
#    raise params[:name].inspect
#    require 'pony'
#    Pony.mail(
#      :from => params[:name] + "<" + params[:email] + ">",
#      :to => 'manish_gauranga@yahoo.com',
#      :subject => params[:name] + " has contacted you",
#      :body => params[:message],
#      :port => '587',
#      :via => :smtp,
#      :via_options => {
#        :address              => 'smtp.gmail.com',
#        :port                 => '587',
#        :enable_starttls_auto => true,
#        :user_name            => 'manish.gauranga',
#        :password             => 'hare$krishna711889',
#        :authentication       => :plain,
#        :domain               => 'localhost.localdomain'
#      })
#end



require 'sinatra'
require './rackmiddleware'
use RackMiddleware
get '/' do
  erb :welcome
end

get '/index' do
  erb index.html
end

post '/ruby/contact-send.rb' do
  #raise params[:name].inspect
  require 'pony'
    Pony.mail(
      :from => params[:name] + "<" + params[:email] + ">",
      :to => 'manish_gauranga@yahoo.com',
      :subject => params[:name] + " has contacted you",
      :body => params[:message]+" "+params[:email],
      :port => '587',
      :via => :smtp,
      :via_options => {
        :address              => 'smtp.gmail.com',
        :port                 => '587',
        :enable_starttls_auto => true,
        :user_name            => 'manish.gauranga',
        :password             => 'hare$krishna711889',
        :authentication       => :plain,
        :domain               => 'localhost.localdomain'
      })
  "Hello World"
end