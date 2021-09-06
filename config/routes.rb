Rails.application.routes.draw do
 
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  resources :words
  resources :answers
  resources :comments
  resources :contentwebs
  devise_for :users
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
