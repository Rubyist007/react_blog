class Category < ApplicationRecord
  validates_presence_of :name
  validates :name, format: { with: REGEX_COMMON_VALID_PROPERTIES_NAME }
end
