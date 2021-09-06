class ContentwebsController < ApplicationController
 
  before_action :set_contentweb, only: %i[ show edit update destroy ]
  before_action :authenticate_user! 
  

 

  # GET /contentwebs or /contentwebs.json
  def index
    @contentwebs = Contentweb.all
  end

  # GET /contentwebs/1 or /contentwebs/1.json
  def show
  end

  # GET /contentwebs/new
  def new
    @contentweb = Contentweb.new
  end

  # GET /contentwebs/1/edit
  def edit
  end

  # POST /contentwebs or /contentwebs.json
  def create
  
    @contentweb = Contentweb.new(contentweb_params)

    respond_to do |format|
      if @contentweb.save
        format.html { redirect_to @contentweb, notice: "Contentweb was successfully created." }
        format.json { render :show, status: :created, location: @contentweb }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @contentweb.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /contentwebs/1 or /contentwebs/1.json
  def update
    respond_to do |format|
      if @contentweb.update(contentweb_params)
        format.html { redirect_to @contentweb, notice: "Contentweb was successfully updated." }
        format.json { render :show, status: :ok, location: @contentweb }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @contentweb.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /contentwebs/1 or /contentwebs/1.json
  def destroy
    @contentweb.destroy
    respond_to do |format|
      format.html { redirect_to contentwebs_url, notice: "Contentweb was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contentweb
      @contentweb = Contentweb.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def contentweb_params
      params.require(:contentweb).permit(:header, :user_id)
    end
end
