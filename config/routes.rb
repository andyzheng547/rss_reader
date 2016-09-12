Rails.application.routes.draw do
  root 'app#index'
  get '/users/find', to: 'users#find'
  resources :users
  resources :rss_feeds

  get '/session/current_user', to: 'sessions#current_user'
  post '/session/login', to: 'sessions#login'
  post '/session/logout', to: 'sessions#logout'
end
