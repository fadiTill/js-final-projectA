class HousesController < ApplicationController

    def index
        @houses = House.all
        # render json: houses
        render json: HouseSerializer.new(@houses)
    end

   
    def show 
        @house = House.find_by(id: params[:id])
        
        
        render json: HouseSerializer.new(@house)
    end 
end