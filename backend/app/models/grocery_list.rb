class GroceryList < ApplicationRecord
  belongs_to :user

  validates :name, presence: true

  # Custom validation to ensure items are in a valid format
  validate :validate_items_format

  # polymorphic association with messages
  has_many :messages, as: :subject

  private

  def validate_items_format
    return unless items.is_a?(Hash)
    
    errors.add(:items, "must be a valid hash")
  end
end
