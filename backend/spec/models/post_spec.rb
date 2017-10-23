require 'rails_helper'

RSpec.describe Post, type: :model do
  
  before do 
    @category = create(:category)
    post_association = @category.posts << create(:post)
    @post = post_association[0]
  end

  subject { @post }

  describe "Parameters" do

   it { should respond_to :name } 
   it { should respond_to :content }
   it { should respond_to :file }
   it { should respond_to :category_id }

  end

  describe "Validation create post" do

    describe "Cannot create post if" do
        
      describe "Post not have name" do
        before { @post.name = nil }
        it { should_not be_valid }
      end

      describe "Name start with lowercase character" do
        before { @post.name = "british humor." }
        it { should_not be_valid }
      end
      
      describe "Name have one word" do
        before { @post.name = "Humor." }
        it { should_not be_valid }
      end
      
      describe "The first word of a name have less than two laters" do
        before { @post.name = "B humor." }
        it { should_not be_valid }
      end

      describe "The second word of a name have less than two laters" do
        before { @post.name = "British h." }
        it { should_not be_valid }
      end

      describe "Name doesn't end with point" do
        before { @post.name = "British humor" }
        it { should_not be_valid }
      end

      describe "File weigh bigger than 2mb." do 
        before { @post.file = File.open("#{Rails.root}/app/assets/images/test_image/NASA_Image.jpg") }
        it { should_not be_valid }
      end
    end
  end

  describe "Association" do

    describe "Belongs to" do

      describe "Category" do
        it { @post.category == @category }
      end
    end
    describe "Has many" do

      describe "Comments" do

        before do
          @post.comments << create(:comment, :for_post)
          @post.comments << create(:comment, :for_post)
        end

        it { @post.comments.length == 2 }
      end
    end
  end
end
