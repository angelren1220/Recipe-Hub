class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id
      t.string :name
      t.integer :quantity
      t.string :units

      t.timestamps
    end
  end
end
