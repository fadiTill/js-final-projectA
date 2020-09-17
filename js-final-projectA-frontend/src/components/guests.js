class Guests {
    constructor() {
        this.guests = []
        this.adapter = new GuestsAdapter()
         this.initBindAnEventlistenersg()
         this.fetchAndLoadGuests()
    }


    initBindAnEventlistenersg() {

           this.guestName  =  document.getElementById("name")
            this.guestPhone_number = document.getElementById("phone_number")
            this.guestAddress = document.getElementById("address")
            this.guestEmail = document.getElementById("email")
            this.guestTime_line  = document.getElementById("time_line")
            this.guestComment  = document.getElementById("comment")
            this.guesthouseIDD = document.getElementById("house_id")
            this.guestCollection = document.getElementById("guest-collection")
            this.addGuest =  document.getElementById("guestContainer")
             this.addGuest.addEventListener("submit", this.createGuest.bind(this))
    
        
           




        
        // {
            // e.preventDefault();
    }

createGuest(e) {
    e.preventDefault();
    // console.log("house is being created")
    // console.log(this.newHouseAddress.value)

    // let guestsHTML = guests.map(function(guest) { 

        const inputB =this.guestName.value
        const inputC = this.guestPhone_number.value
        const inputD = this.guestAddress.value
        const inputE = this.guestEmail.value
        const inputF =  this.guestTime_line.value
        const inputG = this.guestComment.value 
        const inputH = this.guesthouseIDD.value 



    // input(


    // this.guestName.value,
    // this.guestPhone_number.value,
    // this.guestAddress.value,
    // this.guestEmail.value,
    // this.guestTime_line.value,
    // this.guesthouseIDD.value )
    

    // this.adapter.createGuest(input)
      this.adapter.createGuest(inputB,inputC,inputD,inputE,inputF,inputG,inputH).then(guest => {
   console.log(guest)
//     this.guests.push(new Guest(guest))
//  this.renderg()
// // this.newHouseAddress.value =''
  }
      )}

 fetchAndLoadGuests() {
this.adapter
.getGuests()
.then(guests => {
    //  console.log(this)
      guests.forEach(guest => this.guests.push(new Guest(guest)))
    //   console.log(houses)
    
})

.then(()=> {
    // console.log(this)
    this.renderg()
    

})
}



renderg() {
    //  console.log(house)
    //  const houseContainer = document.getElementById("houseContainer")
    //  houseContainer.innerHTML +='my new house here'

    // document.querySelector("#guest-collection").innerHTML+= guestsHTML.join(''
   
    
    this.guestCollection.innerHTML+=this.guests.map(guest =>  

        `
    <div  id="card" class="card">
    <div class="container">
    <p hidden>${guest.house_id}</p>
    <h2>${guest.house.address}</h2>
    <ul>
    <p> ${guest.name}</p>
    <p hidden>${guest.id}</p>
    <p>${guest.phone_number}</p>
    <p>${guest.address}</p>
    <p> ${guest.email}</p>
    <p>${guest.time_line}</p>
    <p> ${guest.comment}</p>
    </ul>
    </div>
    </div>
`

   
    )}
     
    
}