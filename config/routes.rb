Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to:'home#index'

  scope controller: :home do
    
    get :about
  end
  scope controller: :static do
    get :help
    get :contact
    get :product
    get :dashboard
  end

end
