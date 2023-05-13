class User < ApplicationRecord
  has_many :recipes, :bookmarked_books, :books
end
