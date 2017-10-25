class CategoryChannel < ApplicationCable::Channel
  def subscribed
    stream_from "category_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def create(opts)
    p '!!!!!!!!!!!!!!!!!!!!!!!'
    p p opts
    p '!!!!!!!!!!!!!!!!!!!!!!!'
    Category.create(
      name: opts["name"]
    )
  end
end
