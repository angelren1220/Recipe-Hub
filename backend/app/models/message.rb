class Message < ApplicationRecord
  # allows id to switch its associations based on subject
  belongs_to :subject, polymorphic: true

  # more explicit because there are two references to Users 
  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"

  # many to many with users
  has_many :user_inboxes
  has_many :users, through: :user_inboxes

  validates :sender_id, presence: true
  validates :recipient_id, presence: true
  validates :subject_type, presence: true

  validates :message, presence: true, length: { maximum: 500 }
  
  before_save :sanitize_attributes

  private

  def sanitize_attributes
  self.message = CGI.escapeHTML(message) if message.present?
  end

end