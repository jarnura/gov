Rails.application.routes.draw do
    
    resources :districts
    resources :blocks
    resources :villages
    resources :habitats
    resources :plans
    
    get "districts/loadblocks/:id" => "districts#loadblocks"
    get "blocks/loadvillages/:id" => "blocks#loadvillages"
    get "villages/loadhabitats/:id" => "villages#loadhabitats"
    get "habitats/loadplans/:id" => "habitats#loadplans"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
