json.extract! course, :id, :name, :purpose, :description, :user_id, :created_at, :updated_at
json.url course_url(course, format: :json)

json.user_name course.user.name
json.owned (current_user == course.user)

json.poses course.poses, partial: "poses/pose", as: :pose