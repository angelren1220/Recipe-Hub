class Api::MessagesController < ApplicationController

  before_action :set_message, only: [:show, :destroy]

    # GET /messages
    def index
      @messages = Message.all
      render json: @messages
    end
  
    # GET /messages/1
    def show
      render json:  { message:@message }
    end
  
    # POST /messages
    def create
      @message = Message.new(message_params)
  
      if @message.save
        render json: @message, status: :created
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_message
        @message = message.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def message_params
        params.require(:message).permit(:name, :sender_id, :recipient_id, :subject_type, :subject_id, :message )
      end

end
