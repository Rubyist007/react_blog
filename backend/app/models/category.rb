class Category < ApplicationRecord
  validates_presence_of :name
  validates :name, format: { with: REGEX_COMMON_VALID_PROPERTIES_NAME }

  has_many :posts
  has_many :comments, as: :commentable
end
