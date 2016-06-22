class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :rss_feeds
end
