class Game < ApplicationRecord
    
    belongs_to :user, dependent: :destroy

    
end
