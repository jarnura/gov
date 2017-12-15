class CreatePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :plans do |t|
      t.string :plan_title, :null => false
      t.string :plan_description
      t.boolean :status, :null => false, :default => true
      t.integer :issue_level
      t.boolean :issue_status, :null => false, :default => false
      t.bigint :habitat_id, :null => false
      t.integer :progress_count_positive, :null => false, :default => 0
      t.integer :issue_prog_count_positive, :null => false, :default => 0
      t.integer :issue_prog_count_negative, :null => false, :default => 0
      t.integer :progress_count_negative, :null => false, :default => 0

      t.timestamps
    end
  end
end

