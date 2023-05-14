class AddImageToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :image, :text
  end
end
