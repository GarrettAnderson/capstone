json.extract! pose, :id, :image, :name, :category, :description, :physical_benefits, :psych_benefits, :Course_id, :created_at, :updated_at

json.steps poses.steps, partial: "steps/step", as: :step