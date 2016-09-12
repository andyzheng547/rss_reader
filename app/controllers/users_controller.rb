class UsersController < ApplicationController
  
  # GET /users/find
  def find
    @user = User.find_by(username: user_params["username"])

    # Found user. Correct password
    if @user && @user.authenticate(user_params["password"])
      render json: @user, status: 200
    # Found user but incorrect password
    elsif @user
      render json: {errors: {password: ["password is incorrect"]}}, status: 422
    else
      render json: {errors: {user: ["user not found"]}}, status: 404
    end
  end

  # GET /users/:id
  def show
    @user = User.find(params[:id])

    if @user
      render json: @user, status: 200
    else
      render json: {errors: {user: ["user not found"]}}, status: 404
    end
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: 201
    else
      render json: {errors: @user.errors.messages}, status: 422
    end
  end

  # PATCH /users/:id
  def update
    @user = User.find(params[:id])

    # Found user and password correct
    if @user && @user.authenticate(params[:user][:current_password])
      if @user.update(user_params)
        render json: @user, status: 200
      else
        render json: {errors: @user.errors.messages}, status: 422
      end

    # Found user but invalid password
    elsif @user
      render json: {errors: {password: ["invalid password"]}}, status: 422

    # User not found
    else
      render json: {errors: {user: ["user not found"]}}, status: 404
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
