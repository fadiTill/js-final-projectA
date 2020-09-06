# class GuestSerializer
#   include FastJsonapi::ObjectSerializer
#   attributes :name, :phone_number, :address, :email, :time_line, :comment, :house_id
#   belongs_to :house
# end

# attributes :name, :species


# create_table "guests", force: :cascade do |t|
#   t.string "name"
#   t.string "phone_number"
#   t.string "address"
#   t.string "email"
#   t.string "time_line"
#   t.text "comment"
#   t.bigint "house_id", null: false
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["house_id"], name: "index_guests_on_house_id"
# end