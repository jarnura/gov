class CreateVillages < ActiveRecord::Migration[5.1]
  def change
    create_table :villages do |t|
      t.string :village_name, :null => false
      t.bigint :district_id, :null => false
      t.bigint :block_id, :null => false

      t.timestamps
    end
  end
end
