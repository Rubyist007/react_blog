require 'rails_helper'

RSpec.describe Comment, type: :model do
  
  before do 
    category = create(:category)
    comment_association = category.comments << create(:comment, :for_category)
    @comment = comment_association[0]
  end

  subject { @comment }

  describe "Comment parameters" do

   it { should respond_to :author } 
   it { should respond_to :content }

  end

  describe "Validation create comment" do

    describe "Cannot create comment if" do
        
      describe "Comment not have author" do
        before { @comment.author = nil }
        it { should_not be_valid }
      end

      describe "Fist word author filed start with lowercase character" do
        before { @comment.author = "rowan Atkinson." }
        it { should_not be_valid }
      end

      describe "Second word author filed start with lowercase character" do
        before { @comment.author = "Rowan atkinson." }
        it { should_not be_valid }
      end
 
      describe "Author have one word" do
        before { @comment.author = "Rowan." }
        it { should_not be_valid }
      end
      
      describe "The first word of a author have less than two laters" do
        before { @comment.author = "R Atkinson." }
        it { should_not be_valid }
      end

      describe "The second word of a author have less than two laters" do
        before { @comment.author = "Rovan A." }
        it { should_not be_valid }
      end

      describe "Author doesn't end with point" do
        before { @comment.author = "Rovan Atkinson" }
        it { should_not be_valid }
      end
    end
  end
  describe "Association" do
    describe "Belongs to or" do
      describe "Category" do
        
        before do 
          @category = create(:category)
          comment_association = @category.comments << create(:comment, :for_category)
          @comment = comment_association[0]
        end

        it { @comment.commentable == @category }
      end

      describe "Post" do
        before do 
          category = create(:category)
          
          post_association = category.posts << create(:post)
          @post = post_association[0]

          comment_association = @post.comments << create(:comment, :for_post)
          @comment = comment_association[0]
        end

        it { @comment.commentable == @post }
      end
    end
  end
end
