class GuestsController < ApplicationController

    # def index
    #     sightings = Sighting.all
    #     render json: SightingSerializer.new(sightings)
    #   end



     # def show
    #     sighting = Sighting.find_by(id: params[:id])
    #     options = {
    #       include: [:bird, :location]
    #     }
    #     render json: SightingSerializer.new(sighting, options)
    #   end


    def index
        @guests = Guest.all
        # render json: guests, include: [:house]

        options = {
           include: [:house]
        }
        render json: GuestSerializer.new(@guests, options)
    end

    # class SightingsController < ApplicationController
    #     def show
    #       sighting = Sighting.find(params[:id])
    #       render json: SightingSerializer.new(sighting)
    #     end
    #   end


        def show 
            @guest = Guest.find_by(id: params[:id])
            options = {
                include: [:houses]
             }
            # render json: guests, include: [house]
            render json: GuestSerializer.new(@guests, options)
        end 

        def create 
            @house = House.find_by_id(params[:house_id])
            @guest = house.guests.build(guest_params)
            # guest = house.guests.build(params)
            
            # render json: guests, include: [house]
            render json: GuestSerializer.new(@guest)
            if @guest.save
                #  render json :guest
            else
                #  render json :guest, status: 500
                render json: GuestSerializer.new(@guest),  status: 500
                 
         end


         def destroy

            @guest = find_by_id(id: params[:id]) 
            @guest.destroy
            # render json :guest
            render json: GuestSerializer.new(@guest)
         end

         private 

    #      t.string :name
    #   t.string :phone_number
    #   t.string :address
    #   t.string :email
    #   t.string :time_line
    #   t.text  :comment
    #   t.references :house, null:false, foreign_key: true

    #   t.timestamps
def guest_params
         params.require(:guest).permit(:name, :phone_number, :address, :email, :time_line, :comment, house_id)
end 
end 


end