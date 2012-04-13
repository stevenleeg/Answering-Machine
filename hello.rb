require "rubygems"
require "bundler/setup"
require "sinatra"
require "model"

get '/' do
    @posts = Post.all(:order => [:id.desc], :limit => 20)

    erb :index
end
