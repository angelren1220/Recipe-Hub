Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :recipes
    resources :ingredients
    resources :books
    resources :bookmarked_books
    resources :sessions
    resources :grocery_lists

    resources :messages, only: [:index, :show, :create, :update] do
      member do
        # This adds a member block inside the resources :messages block. The member block specifies that the mark_as_read route should be defined as a PUT request on an individual member of the messages resource
        put 'mark_as_read' 
      end
    end
  end
end