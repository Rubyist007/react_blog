class Post < ApplicationRecord
  validates_presence_of :name
  validates :name, format: { with: REGEX_COMMON_VALID_PROPERTIES_NAME }
  validates :file, file_size: { less_than_or_equal_to: 2.megabytes, message: "File must be less than 2 megabytes" }

  mount_base64_uploader :file, FileUploader
end
