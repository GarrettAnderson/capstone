class AddColumnToPosesModel < ActiveRecord::Migration[5.2]
  def change
    add_column :poses, :eng_name, :string
  end
end
