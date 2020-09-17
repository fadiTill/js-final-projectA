class HousesController < ApplicationController

  
    def index 
        houses =    House.all
        render json: houses, include: [:guests]
    end


    def show 
        house = House.find(params[:id])
        render json: houses, include: [:guests]
    end 



    def create 
        house = House.new(house_params)    
       render json: house.save ? house : {message: 500}

     end

     def destroy
        house = House.find(params[:id])
        house.destroy
    end 

    private

def house_params
    params.require(:house).permit( :address)
end 
end
