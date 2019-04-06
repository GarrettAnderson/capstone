Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    resources :users

    resources :courses
    resources :poses
    resources :steps

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
end
