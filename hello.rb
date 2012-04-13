require "rubygems"
require "bundler/setup"
require "sinatra"
require "model"

get '/' do
    @posts = Post.all(:order => [:id.desc], :limit => 20)

    erb :index
end

post '/submit' do
    msg = Post.create(
        :author => params[:author],
        :content => params[:content],
        :date => Time.now
    )

    {
        :status => 200,
        :error => nil
    }.to_json
end
