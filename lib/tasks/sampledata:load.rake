namespace :sampledata:load do
  course = Course.create!(name: "Morning Yoga Flow")

pose = course.poses.create!()
pose.steps.create!()
pose.steps.create!()
pose.steps.create!()
end

# course = Course.create!(name: "Morning Yoga Flow")

# pose = course.poses.create!()
# pose.steps.create!()
# pose.steps.create!()
# pose.steps.create!()

# pose = course.poses.create!()
# pose.steps.create!()
# pose.steps.create!()

# pose = course.poses.create!()
# pose.steps.create!()
# pose.steps.create!()
# pose.steps.create!()
# pose.steps.create!()
# pose.steps.create!()
# pose.steps.create!()
# pose.steps.create!()
# pose.steps.create!()