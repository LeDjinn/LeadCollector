class StaticController < ApplicationController
  before_action :set_contentweb, only: %i[ show edit update destroy ]

  before_action :authenticate_user! 

  def contact
  end

  def product
  end

  def dashboard
    client = current_user
    @contentwebs = Contentweb.where(user: client)
    @comments = Comment.where(user: client)
    
  end
end
