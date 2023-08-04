class Tweet < ApplicationRecord
    validates :description, presence: true, length: {maximum:500}
    validates :username, presence: true
end
