class UserInbox < ApplicationRecord
  belongs_to :user
  belongs_to :message

  validates :user_id, presence: true
  validates :message_id, presence: true
end