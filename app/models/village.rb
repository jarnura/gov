class Village < ApplicationRecord
    belongs_to :district
    belongs_to :block
    has_many :habitats
end
