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
        
      describe "Category not have name" do
        before { @category.name = nil }
        it { should_not be_valid }
      end

      describe "Name start with lowercase character" do
        before { @category.name = "british humor." }
        it { should_not be_valid }
      end
      
      describe "Name have one word" do
        before { @category.name = "Humor." }
        it { should_not be_valid }
      end
      
      describe "The first word of a name have less than two laters" do
        before { @category.name = "B humor." }
        it { should_not be_valid }
      end

      describe "The second word of a name have less than two laters" do
        before { @category.name = "British h." }
        it { should_not be_valid }
      end

      describe "Name doesn't end with point" do
        before { @category.name = "British humor" }
        it { should_not be_valid }
      end
    end
  end
end
