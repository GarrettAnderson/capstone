class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :name
      t.integer :order_num
      t.text :description
      t.belongs_to :pose, foreign_key: true

      t.timestamps
    end
  end
end
