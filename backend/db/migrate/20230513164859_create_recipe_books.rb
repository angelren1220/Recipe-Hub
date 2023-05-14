class CreateRecipeBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_books do |t|
      t.integer :recipe_id
      t.integer :book_id

      t.timestamps
    end
  end
end
