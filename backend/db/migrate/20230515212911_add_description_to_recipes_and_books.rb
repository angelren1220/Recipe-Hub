class AddDescriptionToRecipesAndBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :description, :text, default: nil
    add_column :books, :description, :text, default: nil
  end
end
