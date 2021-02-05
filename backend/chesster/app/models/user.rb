class User < ApplicationRecord
    has_secure_password 
    has_many :moves
    has_many :games
    validates_presence_of :username, :email, :password_digest
    validates_uniqueness_of :username, :email
end
