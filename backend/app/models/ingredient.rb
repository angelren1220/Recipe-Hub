class Ingredient < ApplicationRecord
  belongs_to :recipe
  
  validates :name, presence: true
  validates :quantity, presence: true, numericality: { only_integer: true }
  validates :units, presence: true
end
