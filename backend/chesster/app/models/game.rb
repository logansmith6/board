class Game < ApplicationRecord
    has_many :moves
    belongs_to :user
end
