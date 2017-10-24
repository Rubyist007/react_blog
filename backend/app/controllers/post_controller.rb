class PostController < ApplicationController

  def create
    render json: Category.crete(category_params) 
  end

  def show
    render json: Category.find(params[:id]).comments
  end

end
