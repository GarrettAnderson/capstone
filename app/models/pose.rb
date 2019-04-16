class Pose < ApplicationRecord
  belongs_to :course
  has_many :steps, dependent: :destroy

  has_one_attached :photo
end
