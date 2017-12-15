class Habitat < ApplicationRecord
    belongs_to :district
    belongs_to :block
    belongs_to :village
    has_many :plans
end
