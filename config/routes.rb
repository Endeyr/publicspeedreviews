Rails.application.routes.draw do
  get '/api/places', to: 'api/places#index'
  post '/api/internet_speed', to: 'api/internet_speed#create'

  get '*path', to: 'react#home'
  root 'react#home'
end
