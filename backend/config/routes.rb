Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :recipes
    resources :ingredients
    resources :sessions
  end
end
