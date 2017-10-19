require 'rails_helper'

RSpec.describe Category, type: :model do

  before do 
    @category = create(:category)
  end

  subject { @category }

  describe "Category parameters" do

   it { should respond_to :name } 
   it { should respond_to :description }

  end

  describe "Validation create category" do

    describe "Cannot create categoty if" do

      describe "Name start with lowercase character" do
        @category.name = "british humor."
        it { should_not be_valid }
      end
      
      describe "Name have one word" do
        @category.name = "Humor."
        it { should_not be_valid }
      end
      
      describe "The first word of a name have less than two laters" do
        @category.name = "B humor."
        it { should_not be_valid }
      end

      describe "The second word of a name have less than two laters" do
        @category.name = "British h."
        it { should_not be_valid }
      end

      describe "Name doesn't end with point" do
        @category.name = "British humor"
        it { should_not be_valid }
      end
    end
  end
end
