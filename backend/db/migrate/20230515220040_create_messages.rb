class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id
      t.integer :recipient_id
      t.string :subject_type
      t.integer :associated_id
      t.text :message
      t.timestamps
    end
  end
end
