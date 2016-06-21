class RssFeedsController < ApplicationController

  def show
    @rss = RssFeed.find(params[:id])

    render json: @rss, status: 200
  end

  def create
    @rss = RssFeed.new(user_params)

    if @rss.save
      render json: @rss, status: 201
    else
      render json: @rss, status: 422
    end
  end

  def update
    @rss = RssFeed.find(params[:id])

    if @rss.update(user_params)
      render json: @rss, status: 200
    else
      render json: @rss, status: 422
    end
  end

  def destroy
    @rss = RssFeed.find(params[:id])
    @rss.destroy

    render json: @rss, status: 204
  end

private
  def rss_params
    params.require(:rss).permit(:user_id, :rss_link, :link, :title, :description)
  end
end
