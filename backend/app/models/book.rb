class Book < ApplicationRecord
  belongs_to :user
  
  has_many :recipe_books
  has_many :recipes, through: :recipe_books

  accepts_nested_attributes_for :recipe_books, allow_destroy: true

  has_many :bookmarked_books
  has_many :users, through: :bookmarked_books

  # cascades delete to bookmarks
  has_many :bookmarked_books, dependent: :destroy
  has_many :users, through: :bookmarked_books

  # polymorphic association with messages
  has_many :messages, as: :subject

  validates :name, presence: true
  validates :user_id, presence: true
  
end