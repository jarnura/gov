Rails.application.routes.draw do
    
    resources :districts
    resources :blocks
    resources :villages
    resources :habitats
    
    get "districts/loadblocks/:id" => "districts#loadblocks"
    get "blocks/loadvillages/:id" => "blocks#loadvillages"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
