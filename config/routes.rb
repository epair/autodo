Rails.application.routes.draw do
  resources :lists do
    resources :cards, only: [:new, :index, :create, :show, :update]
  end

  resources :cards, only: [:index, :create, :edit, :show, :destroy]
  root to: 'lists#index'
end
