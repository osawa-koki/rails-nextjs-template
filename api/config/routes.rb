Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'hello', to: 'hello#index'
      get 'singers', to: 'singers#index'
      get 'note', to: 'note#index'
      post 'note', to: 'note#create'
      put 'note/:id', to: 'note#update'
      delete 'note/:id', to: 'note#destroy'
    end
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
