class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :address
  has_many :guests
end


# create_table "houses", force: :cascade do |t|
#   t.string "address"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end