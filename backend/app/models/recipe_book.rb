# this is a join model for Recipe and Book establishing that a Book can have many Recipes and vice versa

class RecipeBook < ApplicationRecord
  belongs_to :recipe, :book

  validates :recipe_id, presence: true
  validates :book_id, presence: true
  validates :recipe_id, uniqueness: { scope: :book_id, message: "This recipe is already added to the book" }
end
