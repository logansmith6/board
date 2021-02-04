class Game < ApplicationRecord
    has_many :moves
    has_many :users
end
