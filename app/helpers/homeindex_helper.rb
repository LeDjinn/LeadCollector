module HomeindexHelper
    def check_user_paid
        if current_user
            stripe_array=[]
            stripe_list= Stripe::Customer.list.data
            stripe_list.each do |customer|
                stripe_array.push customer.email
            end
            
            if stripe_array.include? current_user.email
                return true
            end
        end
    end
end
