require 'rails_helper'

RSpec.describe Post, type: :model do
  
  before do 
    @post = create(:post)
  end

  subject { @post }

  describe "Post parameters" do

   it { should respond_to :name } 
   it { should respond_to :content }
   it { should respond_to :file }

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
end
