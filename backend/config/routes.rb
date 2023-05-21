Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :recipes
    resources :ingredients
    resources :books
    resources :bookmarked_books
    resources :sessions
    resources :grocery_lists
  end
end
