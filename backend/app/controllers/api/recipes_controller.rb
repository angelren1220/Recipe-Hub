class Api::RecipesController < ApplicationController

  before_action :set_recipe, only: [:show, :update, :destroy]

  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes
  end

  # GET /recipes/1
  def show
    render json: {recipe:@recipe, ingredients:@ingredients, user:@user}
  end

  # POST /recipes
  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
      @user = @recipe.user
      @ingredients = @recipe.ingredients
    end


    # Only allow a list of trusted parameters through.
    def recipe_params
      params.require(:recipe).permit(
        :name, :user_id, :cooktime_minutes, :is_vegetarian, :is_vegan, :is_lowcarb, :description,
        :is_lactosefree, :is_glutenfree, :is_nutfree, :image, directions: []
      )
    end

end
