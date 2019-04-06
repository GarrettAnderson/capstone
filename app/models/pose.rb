class Pose < ApplicationRecord
  belongs_to :course
  has_many :steps
end
