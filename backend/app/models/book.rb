class Book < ApplicationRecord
  belongs_to :user
  has_many :recipe_books
  has_many :recipes, through: :recipe_books # many to many relationship

  validates :name, presence: true
end
