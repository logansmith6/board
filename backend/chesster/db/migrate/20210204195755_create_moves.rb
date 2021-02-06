class CreateMoves < ActiveRecord::Migration[6.0]
  def change
    create_table :moves do |t|
      
      t.belongs_to :user
      t.belongs_to :game
      t.timestamps
    end
  end
end
