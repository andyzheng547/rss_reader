class RssFeed < ActiveRecord::Base
  belongs_to :user
  validates :user_id, :rss_link, :title, presence: true
end
