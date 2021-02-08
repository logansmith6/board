class User < ApplicationRecord
    
    has_many :games
    validates_uniqueness_of :username
    accepts_nested_attributes_for :games

    
end
