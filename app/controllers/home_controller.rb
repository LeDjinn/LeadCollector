class HomeController < ApplicationController

    Stripe.api_key=Rails.application.credentials.stripe[:secret_key]
    def index
        
        @customer_list = Stripe::Customer.list.data

    end


end
