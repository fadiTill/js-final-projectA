//  console.log("testing...")
// test that we can get data from the backend
// const BACKEND_URL = 'localhost:3000';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

// const BASE_URL ="http://localhost:3000"
// const HOUSES_URL =`${BASE_URL}/houses`
//  const GUESTS_URL =`${BASE_URL}/guests`


document.addEventListener("DOMContentLoaded",() => {

    
  getGuests()

   });




//    const getGuests = () => {
//  fetch('http://localhost:3000/houses')
//  .then(response => response.json())
//  .then(houses => {
     
//      let housesHTML = houses.map(function(houses){  
//           return`
// <div class="card">
// <div class="container">
// <p>${houses.id}</p>
// <button id="house-address"> ${houses.address}</button>
//  <ul> id="guest-list"</ul> 
// </div>
// </div>
//       `   

     

//      })
     
//       document.querySelector("#house-collection").innerHTML+= housesHTML 
//  })
// };


//  const getGuests = 
     // fetch('http://localhost:3000/guests')
     // .then(response => response.json())
     //  .then(data => console.log(data))

    const getGuests = () => {
     fetch('http://localhost:3000/guests')
     .then(response => response.json())
     .then(data => {
 
//   {


     // t.string "name"
     // t.string "phone_number"
     // t.string "address"
     // t.string "email"
     
     let guestsHTML = data.map(function(guests) {  
          return`
 <div class="card">
<div class="container">
<h2>${guests.house.address}</h2>
<ul>
<li>
<p> ${guests.name}</p>
<p hidden>${guests.id}</p>
<p>${guests.phone_number}</p>
<p>${guests.address}</p>
<p> ${guests.email}</p>
</ul>
<button data-guest-id=${guests.id}>update</button>
</div>
</div>

`
 })
         
 document.querySelector("#guest-collection").innerHTML+= guestsHTML 
})
     
    }
     