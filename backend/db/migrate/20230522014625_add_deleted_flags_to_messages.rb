class AddDeletedFlagsToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :recipient_deleted, :boolean, default: false
    add_column :messages, :sender_deleted, :boolean, default: false
  end
end