class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :errors
  has_many :rss_feeds

  def errors
    object.errors.messages unless object.errors.blank?
  end
end
