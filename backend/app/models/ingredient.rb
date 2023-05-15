class Ingredient < ApplicationRecord
  belongs_to :recipe
  
  validates :name, presence: true
  validates :quantity, presence: true, numericality: { only_integer: true }
  validates :units, presence: true

  before_save :sanitize_attributes

  private

  def sanitize_attributes
    self.name = CGI.escapeHTML(name) if name.present?
  end
end
