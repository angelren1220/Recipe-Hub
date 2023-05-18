class User < ApplicationRecord
  has_many :recipes
  has_many :bookmarked_books
  has_many :books

  validates :first_name, :last_name, :email, presence: true
  validates_uniqueness_of :email, case_sensitive: false
  validates :password, presence: true, length: { minimum: 6 }

  def self.authenticate_with_credentials(email, password)
    user = User.find_by_email(email.downcase.strip)

    if user && user.authenticate(password)
      return user
    else
      return nil
    end
  end
end
