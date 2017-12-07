class Block < ApplicationRecord
    belongs_to :district
    has_many :villages
    has_many :habitats
end
