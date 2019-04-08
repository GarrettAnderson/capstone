json.extract! pose, :id, :name, :category, :description, :physical_benefits, :psych_benefits, :course_id, :created_at, :updated_at

json.steps pose.steps, partial: "steps/step", as: :step