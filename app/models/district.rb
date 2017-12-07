class District < ApplicationRecord
    has_many :blocks
    has_many :villages
    has_many :habitats
end
