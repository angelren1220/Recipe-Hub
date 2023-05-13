class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_books
  has_many :books, through: :recipe_books

  has_many :ingredients

  validates :name, presence: true
  validates :cooktime_minutes, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  
  # Boolean validations
  validates :is_vegetarian, inclusion: { in: [true, false] }
  validates :is_vegan, inclusion: { in: [true, false] }
  validates :is_lowcarb, inclusion: { in: [true, false] }
  validates :is_lactosefree, inclusion: { in: [true, false] }
  validates :is_glutenfree, inclusion: { in: [true, false] }
  validates :is_nutfree, inclusion: { in: [true, false] }

  # Still figuring best way to sanitize the instructions but allow words like "sauté" (notice the accent to be allowed)
  validate :validate_directions

  private

  def validate_directions
    if directions.any? { |direction| /[^[:word:][:space:][:punct:]]/.match?(direction) }
      errors.add(:directions, "must only contain letters, numbers, commas, periods, and spaces")
    end
  end

end