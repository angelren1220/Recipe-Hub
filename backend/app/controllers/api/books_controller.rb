class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  # GET /books
  def index
    @books = Book.all
    render json: @books
  end

  # GET /books/1
  def show
    render json: { book: @book, user: @user, recipes: @recipes }
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update

    #rails will find the recipe_books model
    recipe_id = params[:recipe_id]
    @book.recipes << Recipe.find(recipe_id) if recipe_id

    if @book.save
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_book
    @book = Book.find(params[:id])
    @recipes = @book.recipes
    @user = @book.user
  end

  # Only allow a list of trusted parameters through.
  def book_params
    params.require(:book).permit(:name, :user_id, :description)
  end
end
