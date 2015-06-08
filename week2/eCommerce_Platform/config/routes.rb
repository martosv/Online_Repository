Rails.application.routes.draw do
  root :to => "backpacks#welcome"
  resources :laptops
  resources :backpacks
  # en lugar de resources, se puede escribir las rutas de la siguiente forma de maner individual:
  # get "/laptops", to: "laptops#index", as "laptops"
  # get "/laptops/:id", to: "laptops#show"
  # etc....
  # si en la consola de cmd, escribimos rails routes, te muestra todas las rutas que se ha generado

end
