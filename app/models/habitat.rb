class Habitat < ApplicationRecord
    belongs_to :district
    belongs_to :block
    belongs_to :village
end
