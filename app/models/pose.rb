class Pose < ApplicationRecord
  belongs_to :course
  has_many :steps

  has_one_attached :pose_photo
end
