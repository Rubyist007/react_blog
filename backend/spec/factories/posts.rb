FactoryGirl.define do
  factory :post do
    name "British joke."
    content "What do you call a restaurant that only serves pancakes? All Day Brexit."
    file { File.open("#{Rails.root}/app/assets/images/test_image/Joda.jpg") }
  end
end
