class CategoryController < ApplicationController

  def index
    render json: Category.all
  end

  def show
    render json: Category.find(params[:id]).posts
  end

  def create
    category = Category.build(category_params) 
    if category.save
      ActionCable.server.broadcast 'room_channel',
                                    name:  category.name,
                                    description: category.description
        
        
        
        render json: category, status: 200
    else
       render json: category.errors, status: 400 
    end
  end

  def update
   render json: Category.find(params[:id]).update_atributes(category_params)
  end

  def destroy
    render json: Category.find(params[:id]).destroy
  end
  
  private 
    
    def category_params
      params.require(:category).permit(:name, :description)
    end
end
