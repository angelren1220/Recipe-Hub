class CreateGroceryLists < ActiveRecord::Migration[6.1]
  def change
    create_table :grocery_lists do |t|
      t.integer :user_id
      t.string :name
      t.jsonb :items, default: {}

      t.timestamps
    end
  end
end
