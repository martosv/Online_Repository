class CreateBackpacks < ActiveRecord::Migration
  def change
    create_table :backpacks do |t|
      t.string :model
      t.string :color
      t.integer :capacity
      t.integer :number_of_pockets
      t.string :waterproof
      t.float :price
      t.string :photo

      t.timestamps null: false
    end
  end
end
