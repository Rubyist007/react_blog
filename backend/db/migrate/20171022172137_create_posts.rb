class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :content
      t.string :file

      #t.integer :category_id
      t.belongs_to :category, index: true

      t.timestamps
    end
  end
end
