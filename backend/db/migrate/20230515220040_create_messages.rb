class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id
      t.integer :recipient_id
      t.references :subject, polymorphic: true
      t.text :message
      t.timestamps
    end
  end
end