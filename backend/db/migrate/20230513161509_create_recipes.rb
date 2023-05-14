class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.integer :user_id
      t.string :name
      t.string :directions, array: true
      t.integer :cooktime_minutes
      t.boolean :is_vegetarian, default: false
      t.boolean :is_vegan, default: false
      t.boolean :is_lowcarb, default: false
      t.boolean :is_lactosefree, default: false
      t.boolean :is_glutenfree, default: false
      t.boolean :is_nutfree, default: false

      t.timestamps
    end
  end
end
