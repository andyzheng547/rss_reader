class User < ActiveRecord::Base
  has_secure_password
  has_many :rss_feeds
  validates :password, presence: true
  validates :username, presence: true, uniqueness: true
end
