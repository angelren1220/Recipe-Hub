class Api::MessagesController < ApplicationController

  before_action :set_message, only: [:show, :update, :mark_as_read]

    # GET /messages
    def index
      @messages = Message.all.order(updated_at: :desc)
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

    # PUT /messages/:id/mark_as_read
    def mark_as_read
      if params[:read].present? || params[:read] == false
        if @message.update(read: params[:read])
          render json: @message
        else
          render json: @message.errors, status: :unprocessable_entity
        end
      else
        render json: { error: "error updating message" }, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /recipes/1
    def update
      if @message.update(message_params)
        # Check if sender_deleted or recipient_deleted is present in the parameters
        if params[:data].present?
          if params[:data][:sender_deleted].present?
            @message.update(sender_deleted: params[:data][:sender_deleted])
          elsif params[:data][:recipient_deleted].present?
            @message.update(recipient_deleted: params[:data][:recipient_deleted])
          end
        end
        render json: @message
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_message
        @message = Message.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def message_params
        if request.put?
          params.require(:data).permit(:id)
        else
          params.require(:message).permit(:sender_id, :recipient_id, :subject_type, :subject_id, :message)
        end
      end

end
