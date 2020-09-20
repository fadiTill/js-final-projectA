
class Houses {
    constructor() {
        this.houses = []
        this.adapter = new HousesAdapter()
         this.initBindAnEventlisteners()
        this.fetchAndLoadHouses()
    }


    initBindAnEventlisteners() {
        this.houseID = document.getElementById("house_id")
        this.newHouseAddress = document.getElementById("house_address")
        this.addHouse =  document.getElementById("houseContainer")
         this.card = document.getElementById("card")
        this.addHouse.addEventListener("submit", this.createHouse.bind(this))
        
            
    }

createHouse(e){
    e.preventDefault();
    // console.log("house is being created")
    // console.log(this.newHouseAddress.value)
    const inputb = this.newHouseAddress.value
    
//1 homework render new house in Select without refreshing the  page.
    // this.adapter.createHouse(inputb)
     this.adapter.createHouse(inputb).then(house => {
        //  console.log(house)
    this.houses.push(new House(house))
     this.newHouseAddress.value =''
 this.render()

 })
}


fetchAndLoadHouses() {
this.adapter
.getHouses()
.then(houses => {
    //  console.log(this)
      houses.forEach(house => this.houses.push(new House(house)))
       console.log(this.houses)
    
})

.then(()=> {
    // console.log(this)
    this.render()
    

})
}

render() {
    //  console.log(house)
    //  const houseContainer = document.getElementById("houseContainer")
    //  houseContainer.innerHTML +='my new house here'
   
    
     this.houseID.innerHTML+=this.houses.map(house => `<option value=${house.id}>${house.address} (${house.id})</option>`
     ).join('')
    
     // this..innerHTML+=this.houses.map(house => house.renderOption())
    // )}

    
}
}