json.extract! course, :id, :name, :purpose, :description, :user_id, :created_at, :updated_at
json.url course_url(course, format: :json)

json.poses course.poses, partial: "poses/pose", as: :pose
