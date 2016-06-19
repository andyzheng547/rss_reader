class UsersController < ApplicationController

private
  def user_params
      params.require(:user).permit(:username, :password)
  end

end
