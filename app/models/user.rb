class User < ActiveRecord::Base
  has_secure_password
  has_many :rss_feeds
  validates :username, presence: true, uniqueness: true
end
