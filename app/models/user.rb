class User < ActiveRecord::Base
  has_secure_password
  has_many :rss_feeds
  validates_presence_of :username, :password
  validates_uniqueness_of :username
end
