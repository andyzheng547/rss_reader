class RssFeedsController < ApplicationController

  def show
    @rss = RssFeed.find(params[:id])

    render json: @rss, status: 200
  end

  def create
    @rss = RssFeed.new(rss_params)

    if @rss.save
      render json: @rss, status: 201
    else
      render json: {errors: @rss.errors, status: 422}
    end
  end

  def update
    @rss = RssFeed.find(params[:id])

    if @rss.update(user_params)
      render json: @rss, status: 200
    else
      render json: {errors: @rss.errors, status: 422}
    end
  end

  def destroy
    @rss = RssFeed.find(params[:id])
    @rss.destroy

    render json: {errors: @rss.errors, status: 204}
  end

private
  def rss_params
    # If params[:rss] is a json string, parse and return the json string
    # else return permitted parameters
    params[:rss].is_a?(String) ?
      params[:rss] = JSON.stringify(params[:rss]) :
      params.require(:rss).permit(:user_id, :rss_link, :link, :title, :description)
  end
end
