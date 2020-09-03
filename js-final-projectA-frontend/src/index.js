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
    
  getHouses()
   });




   const getHouses = () => {
 fetch('http://localhost:3000/houses')
 .then(response => response.json())
 .then(houses => {
     
     let housesHTML = houses.map(function(houses){  
          return`
<div class="card">
<div class="container">
<p hidden>>${houses.id}</p>
<button id="house-address"> ${houses.address}</button>
 <ul> id="guest-list"</ul> 
</div>
</div>
      `   

     

     })
     
      document.querySelector("#house-collection").innerHTML+= housesHTML 
 })
};

    const getGuests = 
     fetch('http://localhost:3000/guests')
     .then(response => response.json())
     .then(data => 
     // .then(data => console.log(data))
  {
     
     let guestsHTML = data.map(function(guests){  
          return`
 <div class="card">
<div class="container">
<p >${guests.house_id}</p>
<p hidden>${guests.id}</p>
<button id="house-address"> ${guests.name}</button>
</div>
</div>

`
 });
         
 document.querySelector("#guest-collection").innerHTML+= guestsHTML 
}) 