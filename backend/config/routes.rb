Rails.application.routes.draw do
  resources :users, :recipes, :ingredients, :books, :recipe_books, :bookmarked_books
end
