class Api::BookmarkedBooksController < ApplicationController

  before_action :set_bookmarked_book, only: [:show, :update, :destroy]
  
    # GET /bookmarked_books
    def index
      @bookmarked_books = BookmarkedBook.all
  
      render json: @bookmarked_books
    end
  
    # GET /bookmarked_books/1
    def show
      render json: { bookmarked_book:@bookmarked_book, book:@book, user:@user }
    end
  
    # POST /users
    def create
      @bookmarked_book = BookmarkedBook.new(user_params)
  
      if @bookmarked_book.save
        render json: {message: 'Successfully created!', user: @user, session: session}
      else
        render json: @bookmarked_book.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /users/1
    def update
      if @bookmarked_book.update(bookmarked_book)
        render json: @bookmarked_book
      else
        render json: @bookmarked_book.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /users/1
    def destroy
      @bookmarked_book.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_bookmarked_book
        @bookmarked_book = BookmarkedBook.find(params[:id])
        @book = @bookmarked_book.book
        @user = @bookmarked_book.user
      end
  
      # Only allow a list of trusted parameters through.
      def bookmarked_book_params
        params.require(:bookmarked_book).permit(:user_id, :book_id)
      end

end
