class HousesController < ApplicationController

  
    def index 
        houses =    House.all
        render json: houses, include: [:guests]
    end


    def show 
        house = House.find(params[:id])
        render json: houses, include: [:guests]
    end 
end
