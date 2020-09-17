class GuestsAdapter {
    constructor() {
    this.baseUrl =  
    'http://localhost:3000/guests'
}

getGuests() {
return fetch(this.baseUrl).then(response => response.json()
)
}
// (:name, :phone_number, :address, :email, :time_line, :comment, :house_id)
createGuest(inputB,inputC,inputD,inputE,inputF,inputG,inputH){
    const guest = {
        name: inputB,
        address: inputC,
        phone_number: inputD,
        email: inputE,
        time_line: inputF,
        comment: inputG,
        house_id: inputH

    }
    return fetch(this.baseUrl, {
        method: 'Post', 
        headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json"
          },
        body: JSON.stringify({guest}),
        
// }).then(res => res.json())
        })
}
}