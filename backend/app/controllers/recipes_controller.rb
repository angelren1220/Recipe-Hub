class RecipesController < ApplicationController
  
  # Template for other controllers
  def create
    # Instantiate a new Recipe object with the required parameters
    @recipe = Recipe.new(recipe_params)

    # Check if the recipe was successfully saved to the database
    if @recipe.save
      # Render the recipe as JSON
      render json: @recipe, status: :created, location: @recipe
    else
      # Render the error messages as JSON
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  private

  # Define a helper method to whitelist the required parameters for recipe creation
  def recipe_params
    params.require(:recipe).permit(
      :name, :cooktime_minutes, :is_vegetarian, :is_vegan, :is_lowcarb,
      :is_lactosefree, :is_glutenfree, :is_nutfree, directions: []
    )
  end

end