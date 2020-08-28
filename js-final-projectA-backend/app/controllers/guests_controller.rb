class GuestsController < ApplicationController

    def index
        guests = Guest.all
        render json: guests, include: [:house]
    end

        def show 
            guest = Guest.find_by(id: params[:id])
            render json: guests, include: [house]
        end 

        def create 
            house = House.find_by_id(params[:trainer_id])
            guest = house.guests.build(guest_params)
            # guest = house.guests.build(params)
            if guest.save
                 render json :guest
            else
                 render json :guest, status: 500
                 
         end


         def destroy

            guest = find_by_id(id: params[:id]) 
            guest.destroy
            render json :guest
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
         params.require(:guest).permit(:name, :phone_number, :address, :email, :time_line, :comment)
end 
end 


end