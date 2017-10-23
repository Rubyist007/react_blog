FactoryGirl.define do
  factory :comment do
    author "Rovan Atkinson."
    content "LoL"

    trait :for_category do
      association :commentable, factory: :category
    end

    trait :for_post do
      association :commentable, factory: :post
    end
  end
end
