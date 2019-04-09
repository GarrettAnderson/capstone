namespace :sampledata do
  desc "Load Sample Data"
  task load: :environment do
    course = Course.create!(name: "Morning Yoga Flow")

    pose = course.poses.create!()
    pose.steps.create!()
    pose.steps.create!()
    pose.steps.create!()
  end
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
