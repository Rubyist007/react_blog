class CategoryCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(category)
    ActionCable
      .server
      .broadcast('category_channel',
                id: category.id,
                name: category.name,
                description: category.description)
  end
end
