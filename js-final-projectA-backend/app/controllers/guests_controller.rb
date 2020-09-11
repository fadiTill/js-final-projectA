class GuestsController < ApplicationController
require 'pry'
    
     
def index 
    guests =    Guest.all
    render json: guests, include: [:house]
end


def show 
    guest = Guest.find(params[:id])
    render json: guest, include: [:house]
end

# def create
    # house = House.find(params[:house_id])
    # guest = House.guests.create(params)
    # house = House.find(params[:trainer_id])
    # guest = guest.houses.build({params
       
    #     # name: Faker::Name.last_name,
    #     # phone_number: Faker::PhoneNumber.phone_number,
    #     # address: Faker::Address.street_address,
    #     # email: Faker::Internet.email(name: 'test'),
    #     # time_line: Faker::Date.forward(days: 31),
    #     # comment: Faker::Marketing.buzzwords

    # })
    
    def create 
        guest = Guest.new(guest_params)    
    render json: guest.save ? guest : {message: 500}

     end
 



def destroy
    guest = Guest.find(params[:id])
    guest.destroy
end 
# create_table "guests", force: :cascade do |t|
#     t.string "name"
#     t.string "phone_number"
#     t.string "address"
#     t.string "email"
#     t.string "time_line"
#     t.text "comment"
#     t.bigint "house_id", null: false
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.index ["house_id"], name: "index_guests_on_house_id"
#   end





private

def guest_params
    params.require(:guest).permit(:name, :phone_number, :address, :email, :time_line, :comment, :house_id)
end 
end