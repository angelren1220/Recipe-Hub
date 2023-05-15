class GroceryList < ApplicationRecord
  belongs_to :user

  validates :name, presence: true

  # polymorphic association with messages
  has_many :messages, as: :subject

end
