class GuestSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :phone_number, :address, :email, :time_line, :comment, :house_id :house, 
  belongs_to :house



  def house
    {
        house_id: 
        self.object.house.id,
        house_address:
        self.object.house.address}
    }
  end
end

 



