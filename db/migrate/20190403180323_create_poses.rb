class CreatePoses < ActiveRecord::Migration[5.2]
  def change
    create_table :poses do |t|
      t.string :name
      t.string :category
      t.text :description
      t.text :physical_benefits
      t.text :psych_benefits
      t.belongs_to :course, foreign_key: true

      t.timestamps
    end
  end
end
