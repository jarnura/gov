class CreateHabitats < ActiveRecord::Migration[5.1]
  def change
    create_table :habitats do |t|
      t.string :habitat_name
      t.bigint :district_id
      t.bigint :block_id
      t.bigint :village_id

      t.timestamps
    end
  end
end
