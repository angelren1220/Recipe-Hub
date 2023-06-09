class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show

    #append book to bookmark_books
    user = User.find(params[:id])
    bookmarked_books_with_books = user.bookmarked_books.map do |bookmarked_book|
      book = Book.find_by(id: bookmarked_book.book_id)
      bookmarked_book.attributes.merge(book: book)
    end
  
    render json: {
      user: user,
      recipes: @recipes,
      books: @books.order(:id),
      bookmarked_books: bookmarked_books_with_books,
      messages: @messages,
      grocerylists: @grocerylists.order(:id) }
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      # render json: @user, status: :created
      render json: {message: 'Successfully created!', user: @user, session: session}
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
      @recipes = @user.recipes
      @books = @user.books
      @bookmarked_books = @user.bookmarked_books
      @messages = Message.where("recipient_id = :user_id OR sender_id = :user_id", user_id: @user.id)
      @grocerylists = @user.grocery_lists
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end
