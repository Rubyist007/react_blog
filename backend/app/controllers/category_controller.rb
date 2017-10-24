class CategoryController < ApplicationController

  def index
    render json: Category.all
  end

  def create
    render json: Category.crete(category_params) 
  end

  def show
    render json: Category.find(params[:id]).posts
  end

  private 
    
    def category_params
      params.require(:category).permit(:name, :description)
    end
end
