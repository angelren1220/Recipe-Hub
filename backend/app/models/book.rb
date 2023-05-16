class Book < ApplicationRecord
  belongs_to :user
  
  has_many :recipe_books
  has_many :recipes, through: :recipe_books

  has_many :bookmarked_books
  has_many :users, through: :bookmarked_books

  # polymorphic association with messages
  has_many :messages, as: :subject

  validates :name, presence: true

  before_save :sanitize_attributes

  private

  def sanitize_attributes
    self.name = CGI.escapeHTML(name)
    self.description = CGI.escapeHTML(description)
  end

end