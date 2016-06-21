class UsersController < ApplicationController
  require 'json'

  # GET /users/find
  def find
    user_params = JSON.parse(params[:user])

    @user = User.find_by(user_params[:username])

    if @user.authenticate(user_params["password"])
      render json: @user, status: 200
    else
      render json: @user, status: 404
    end

  end

  # GET /users/:id
  def show
    @user = User.find(params[:id])

    render json: @user, status: 200
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: 201
    else
      render json: @user, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: @user, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.rss_feeds.destroy_all
    @user.destroy

    render json: @user, status: 204
  end


# private
#   def user_params
#       params.require(:user).permit(:username, :password)
#   end

end
