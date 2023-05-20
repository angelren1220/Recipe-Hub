class Ingredient < ApplicationRecord
  belongs_to :recipe
  

  before_save :sanitize_attributes

  private

  def sanitize_attributes
    self.name = CGI.escapeHTML(name) if name.present?
  end
end
