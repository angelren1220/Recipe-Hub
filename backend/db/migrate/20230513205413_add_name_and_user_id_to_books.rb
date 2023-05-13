class AddNameAndUserIdToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :name, :string
    add_column :books, :user_id, :integer
  end
end
