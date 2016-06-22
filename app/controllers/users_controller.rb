class UsersController < ApplicationController
  require 'json'

  # GET /users/find
  def find
    @user = User.find_by(username: user_params[:username])

    if @user && @user.authenticate(user_params[:password])
      render json: @user, status: 200
    else
      render json: {errors: {user: "could not find user"}}, status: 404
    end
  end

  # GET /users/:id
  def show
    @user = User.find(params[:id])

    render json: @user, status: 200
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: 201
    else
      render json: {errors: @user.errors, status: 422}
    end
  end

  # PATCH /users/:id
  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: {errors: @user.errors, status: 422}
    end
  end

  # DELETE /users/:id
  def destroy
    @user = User.find(params[:id])
    @user.rss_feeds.destroy_all
    @user.destroy

    render json: @user, status: 204
  end


private
  def user_params
    # If params[:user] is a json string, parse and return the json string
    # else return permitted parameters
    params[:user].is_a?(String) ?
      JSON.parse(params[:user]) :
      params.require(:user).permit(:username, :password)
  end

end
