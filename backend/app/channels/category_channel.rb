class CategoryChannel < ApplicationCable::Channel
  def subscribed
    stream_from "category_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def create(category)
    Category.create(
      name: category["name"]
    )
  end
end
