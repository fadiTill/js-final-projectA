class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :address, :guests
  has_many :guests

#   def guests 
#     self.object.guests.map do |guest|
#         {
           
#             name: guest.name,
#             address: guest.address,
#             phone_number: guest.phone_number,
#             email: guest.email,
#             time_line: guest.time_line, 
#             comment: guest.comment

#         }
    end
   end 
end 


