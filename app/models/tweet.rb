class Tweet < ApplicationRecord
    validates :description, presence: true, length: {maximum:500}
    validates :user_name, presence: true
end
