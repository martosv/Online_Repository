Rails.application.routes.draw do
  root :to => "backpacks#welcome"
  resources :laptops
  resources :backpacks
end
