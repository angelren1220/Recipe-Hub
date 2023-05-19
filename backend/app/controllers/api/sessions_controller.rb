class Api::SessionsController < ApplicationController
  def create
    if user = User.authenticate_with_credentials(params[:email], params[:password])
      # success, log user in
      session[:user_id] = user.id
      render json: {message: 'Successfully logged in!', user: user, session: session}
    else
      # failure send error message.
      render json: {message: 'Invalid login!'}, status: 403
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {message: 'Successfully logged out!'}
  end

end