class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :content
      t.string :file

      t.timestamps
    end
  end
end
