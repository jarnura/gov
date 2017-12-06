class CreateBlocks < ActiveRecord::Migration[5.1]
  def change
    create_table :blocks do |t|
      t.string :block_name
      t.bigint :district_id

      t.timestamps
    end
  end
end
