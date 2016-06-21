Rails.application.routes.draw do
  root 'home#home'
  get '/users/find', to: 'users#find'
  resources :users
  resources :rss_feeds
end
