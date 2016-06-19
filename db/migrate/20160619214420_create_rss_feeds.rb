class CreateRssFeeds < ActiveRecord::Migration
  def change
    create_table :rss_feeds do |t|
      t.integer :user_id
      t.string :rss_link
      t.string :link
      t.string :title
      t.string :description
    end
  end
end
