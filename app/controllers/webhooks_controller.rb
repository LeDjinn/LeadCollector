class WebhooksController < ApplicationController
    payload = request.body.read
    endpoint_secret = Rails.application.credentials.stripe[:webhook_secret]
    event = nil
  
    begin
      event = Stripe::Webhook.construct_event(
        payload, sig_header, endpoint_secret
      )
    rescue JSON::ParserError => e
      # Invalid payload
      render json: {message: e}, status: 400
      return
    end
  
    # Handle the event
    case event.type
    when 'payment_intent.succeeded'
      payment_intent = event.data.object # contains a Stripe::PaymentIntent
      # Then define and call a method to handle the successful payment intent.
      # handle_payment_intent_succeeded(payment_intent)
    when 'payment_method.attached'
      payment_method = event.data.object # contains a Stripe::PaymentMethod
      # Then define and call a method to handle the successful attachment of a PaymentMethod.
      # handle_payment_method_attached(payment_method)
    # ... handle other event types
    else
      puts "Unhandled event type: #{event.type}"
    end
  
    status 200
end
