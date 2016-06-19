require 'rails_helper'

describe User, type: :model do
  context 'attributes' do
    it 'should have the right attributes' do
      user_attributes = User.attribute_names

      expect(user_attributes).to include('username')
      expect(user_attributes).to include('password_digest')
    end
  end

  context 'validations' do
    let(:no_username) {User.new(password: 'password')}
    let(:no_password) {User.new(username: 'username')}

    let!(:valid_user) {User.create(username: 'username', password: 'password')}
    let!(:copycat) {User.create(username: 'username', password: 'password')}

    it 'should be invalid without the username and password' do
      expect(no_username).to be_invalid
      expect(no_password).to be_invalid
    end

    it 'should not save without the username and password' do
      expect(no_username.save).to eq(false)
      expect(no_password.save).to eq(false)
    end

    it 'should be invalid if username already exists' do
      expect(copycat).to be_invalid
      expect(copycat.save).to eq(false)
    end
  end

  context 'associations' do
    let!(:user) {User.create(username: 'username', password: 'password')}
    let!(:rss1) {RssFeed.create(user_id: user.id, rss_link: 'https://news.ycombinator.com/rss', link: 'https://news.ycombinator.com/', title: 'Hacker News', description: 'The Fathers of the Internet Urge Today\'s Software Engineers to Reinvent the Web')}
    let!(:rss2) {RssFeed.create(user_id: user.id, rss_link: 'https://www.reddit.com/r/all/.rss', link: 'https://www.reddit.com/r/all/', title: 'R/all - Reddit', description: '/r/all displays content from all of reddit, including subreddits you aren\'t subscribed to. Some subreddits have chosen to exclude themselves from /r/all.')}

    it 'should have many rss feeds' do
        expect(user.rss_feeds.count).to eq(2)
    end
  end
end
