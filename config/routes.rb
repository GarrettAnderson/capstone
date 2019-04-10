Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do

    # Get all the poses we know
    get "/poses", to: "poses#all"

    resources :courses do
      resources :poses do
        resources :steps
      end
    end
  end
end
