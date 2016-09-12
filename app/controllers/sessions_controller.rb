class SessionsController < ApplicationController
  include ApplicationHelper

  def current_user
    @user = User.find_by(id: session[:current_user_id])
    render json: @user, status: 200
  end

  def login
    session[:current_user_id] = params[:current_user_id]

    render json: {status: "Success", message: "User login sucessful"}, status: 201
  end

  def logout
    session.delete(:current_user_id)
    render json: {status: "Success", message: "User logout sucessful"}, status: 201
  end
end
