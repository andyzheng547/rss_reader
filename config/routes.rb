Rails.application.routes.draw do
  root 'home#home'
  resources :users
  resources :rss_feeds
end
