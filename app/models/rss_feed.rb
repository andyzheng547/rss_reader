class RssFeed < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :user_id, :rss_link, :title
end
