# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#test

require 'faker'
require'securerandom'

House.delete_all 
Guest.delete_all

houses_address = [
    '1 test address',
    '2 test address',
    '3 test address',
    '4 test address',
    '5 test address',
    
]



houses_collection = []

houses_address.each do |address|
    houses_collection << House.create(address: address)

end


houses_collection.each do | house|
    list_size = ( SecureRandom.random_number(4)+ 1).floor


    (1...list_size).each do |guest|
name = Faker::Name.last_name
phone_number = Faker::PhoneNumber.phone_number
address = Faker::Address.street_address
email = Faker::Internet.email(name: 'test')
time_line = Faker::Date.forward(days: 31)
comment = Faker::Marketing.buzzwords
Guest.create(name: name, phone_number:  phone_number, address:  address, email: email, time_line: time_line, comment: comment, house_id: house.id )
    end 
end 

# create_table :guests do |t|
#     t.string :name
#     t.string :phone_number
#     t.string :address
#     t.string :email
#     t.string :time_line
#     t.text  :comment
