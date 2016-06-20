Rails.application.routes.draw do
  root 'home#home'
  resources :users
  resources :rss_feeds

  get '/users/find', to: 'users#find'
end
