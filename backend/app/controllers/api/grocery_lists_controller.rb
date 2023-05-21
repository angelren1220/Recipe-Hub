class Api::GroceryListsController < ApplicationController
  before_action :set_grocerylist, only: [:show, :update, :destroy]

  # GET /grocerylists
  def index
    @grocerylists = GroceryList.all

    render json: @grocerylists
  end

  # GET /grocerylists/1
  def show
    render json: {grocerylist:@grocerylist, user:@user}
  end

  # POST /grocerylists
  def create
    @grocerylist = GroceryList.new(grocerylist_params)

    if @grocerylist.save
      render json: @grocerylist, status: :created
    else
      render json: @grocerylist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /grocerylists/1
  def update
    if @grocerylist.update(grocerylist_params)
      render json: @grocerylist
    else
      render json: @grocerylist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /grocerylists/1
  def destroy
    @grocerylist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocerylist
      @grocerylist = GroceryList.find(params[:id])
      @user = @grocerylist.user

    end


    # Only allow a list of trusted parameters through.
    def grocerylist_params
      params.require(:grocerylist).permit(
        :name, :user_id, :items
      )
    end
end
