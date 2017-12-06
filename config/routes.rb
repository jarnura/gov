Rails.application.routes.draw do
    
    resources :districts
    resources :blocks
    
    get "districts/loadblocks/:id" => "districts#loadblocks"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
