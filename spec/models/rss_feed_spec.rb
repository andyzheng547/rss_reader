require 'rails_helper'

describe RssFeed, type: :model do
  context 'attributes' do
    it 'should have the right attributes' do
      rss_attributes = RssFeed.attribute_names

      expect(rss_attributes).to include('user_id')
      expect(rss_attributes).to include('rss_link')
      expect(rss_attributes).to include('link')
      expect(rss_attributes).to include('title')
      expect(rss_attributes).to include('description')
    end
  end

  context 'validations' do
    let!(:user) {User.create(username: 'username', password: 'password')}
    let!(:missing_uid) {RssFeed.new(rss_link: 'https://news.ycombinator.com/rss', title: 'The Fathers of the Internet Urge Today\'s Software Engineers to Reinvent the Web')}
    let!(:missing_rlink) {RssFeed.new(user_id: user.id, title: 'The Fathers of the Internet Urge Today\'s Software Engineers to Reinvent the Web')}
    let!(:missing_title) {RssFeed.new(user_id: user.id, rss_link: 'https://news.ycombinator.com/rss')}

    it 'should be invalid without a user id, rss link and title' do
      expect(missing_uid).to be_invalid
      expect(missing_rlink).to be_invalid
      expect(missing_title).to be_invalid
    end

    it 'should not be saved if user id, rss link or title are missing' do
      expect(missing_uid.save).to eq(false)
      expect(missing_rlink.save).to eq(false)
      expect(missing_title.save).to eq(false)

      expect(user.rss_feeds.count).to eq(0)
    end
  end

  context 'associations' do
    let!(:user) {User.create(username: 'username', password: 'password')}
    let!(:rss) {RssFeed.create(user_id: user.id, rss_link: 'https://news.ycombinator.com/rss', link: 'https://news.ycombinator.com/', title: 'Hacker News', description: 'The Fathers of the Internet Urge Today\'s Software Engineers to Reinvent the Web')}

    it 'should belong to a user through user id' do
      expect(rss.user).to eq(user)
      expect(rss.user.id).to eq(user.id)
    end
  end
end
