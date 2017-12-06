class CreateDistricts < ActiveRecord::Migration[5.1]
  def change
    create_table :districts do |t|
      t.string :district_name, :null => false, :limit => 40

      t.timestamps
    end
  end
end
