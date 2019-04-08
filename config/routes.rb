Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    resources :courses do
      resources :poses do
        resources :steps
      end
    end
  end
end
