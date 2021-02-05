class User < ApplicationRecord
    has_many :moves
    has_many :games
    validates_uniqueness_of :username
    
end
