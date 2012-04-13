require "rubygems"
require "bundler/setup"
require "data_mapper"

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/data.db")

class Post
    include DataMapper::Resource
    property :id, Serial
    property :author, String
    property :content, Text
    property :date, DateTime
end

DataMapper.finalize
Post.auto_upgrade!
