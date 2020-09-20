class HousesAdapter {
    constructor() {
    this.baseUrl =  
    'http://localhost:3000/houses'
}

getHouses() {
return fetch(this.baseUrl).then(response => response.json()
)
}

createHouse(inputb){
    const house = {
        address: inputb,
    }
    return fetch(this.baseUrl, {
        method: 'Post', 
         headers: {
             "Content-Type": "application/json",
        
            },
        body: JSON.stringify({house}),
    }).then(response => response.json())

}
}
