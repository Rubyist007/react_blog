class Category < ApplicationRecord
  validates_presence_of :name
  validates :name, format: { with: REGEX_COMMON_VALID_PROPERTIES_NAME }

  has_many :posts, dependent: :destroy
  has_many :comments, as: :commentable, dependent: :destroy

  default_scope -> { order('created_at DESC') }

  after_commit do
    CategoryCreationEventBroadcastJob.perform_later(self)
  end
end
