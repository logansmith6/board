class User < ApplicationRecord
    require 'bcrypt'
    validates :username, uniqueness: true
    has_secure_password
    has_many :moves
    has_many :games
end
