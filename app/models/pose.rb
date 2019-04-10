class Pose < ApplicationRecord
  belongs_to :course
  has_many :steps

  has_one_attached :photo
end
