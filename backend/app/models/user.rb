class User < ApplicationRecord
  has_many :recipes
  has_many :bookmarked_books
  has_many :books

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
end
