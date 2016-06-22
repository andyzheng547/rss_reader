class RssFeedSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :rss_link, :link, :title, :description
end
