require 'sinatra'

get '/' do
  erb :home
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

get '/products' do
  erb :products
end

post '/forum' do
  @important = params[:important]
  @body = params[:body]
end