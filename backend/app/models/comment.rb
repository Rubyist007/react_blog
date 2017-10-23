class Comment < ApplicationRecord
  validates_presence_of :author
  validate :author_validates

  belongs_to :commentable, polymorphic: true

  private

    def author_validates
      return errors.add(:author, "not valid author") if self.author == nil || self.author.match(REGEX_COMMON_VALID_PROPERTIES_NAME) == nil

      second_word = self.author.match(REGEX_COMMON_VALID_PROPERTIES_NAME)[2]
      return errors.add(:author, "not valid author") if second_word[0] != second_word[0].upcase 
    
    end
end
