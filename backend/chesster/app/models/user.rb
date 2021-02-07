class User < ApplicationRecord
    include ActiveModel::Serializers::JSON
    has_many :games
    validates_uniqueness_of :username
    
end
