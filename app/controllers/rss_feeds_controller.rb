class RssFeedsController < ApplicationController

private
  def rss_params
    params.require(:rss).permit(:user_id, :rss_link, :link, :title, :description)
  end
end
