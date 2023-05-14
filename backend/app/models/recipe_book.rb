# This is a join model for Recipe and Book establishing that a Book can have many Recipes and vice versa.
# This is NOT a collection of recipes, it catalogs each Recipe in a Book.

class RecipeBook < ApplicationRecord
  belongs_to :recipe
  belongs_to :book

  validates :recipe_id, presence: true
  validates :book_id, presence: true
  validates :recipe_id, uniqueness: { scope: :book_id, message: "This recipe is already added to the book" }
end
