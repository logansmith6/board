class User < ApplicationRecord
    has_many :moves
    has_many :games
    
    
end
