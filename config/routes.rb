Rails.application.routes.draw do
  root 'app#index'
  get '/users/find', to: 'users#find'
  resources :users
  resources :rss_feeds
end
