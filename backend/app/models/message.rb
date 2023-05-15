class Message < ApplicationRecord
  SUBJECT_TYPES = %w[book recipe grocery_list].freeze

  validates :sender_id, presence: true
  validates :recipient_id, presence: true
  validates :subject_type, presence: true

  # ensures subject_type is one of the three categories at the top
  validates :subject_type, presence: true, inclusion: { in: SUBJECT_TYPES }
  validates :associated_id, presence: true
  
  validates :message, presence: true, length: { maximum: 500 }
  
  before_save :sanitize_attributes

  private

  def sanitize_attributes
    self.name = CGI.escapeHTML(name)
    self.message = CGI.escapeHTML(message)
  end

end
