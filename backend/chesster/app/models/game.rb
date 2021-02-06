class Game < ApplicationRecord
    has_many :moves
    belongs_to :user
    accepts_nested_attributes_for :user
end
