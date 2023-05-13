class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  
  validates :name, presence: true
  validates :cooktime_minutes, presence: true, numericality: { only_integer: true }

  # Boolean validations
  validates :is_vegetarian, inclusion: { in: [true, false] }
  validates :is_vegan, inclusion: { in: [true, false] }
  validates :is_lowcarb, inclusion: { in: [true, false] }
  validates :is_lactosefree, inclusion: { in: [true, false] }
  validates :is_glutenfree, inclusion: { in: [true, false] }
  validates :is_nutfree, inclusion: { in: [true, false] }

  validate :validate_directions

  private

  def validate_directions
    if directions.any? { |direction| /[^a-zA-Z0-9,.\s]/.match?(direction) }
      errors.add(:directions, "must only contain letters, numbers, commas, periods, and spaces")
    end
  end
end
