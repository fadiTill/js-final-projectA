//  console.log("testing...")
// test that we can get data from the backend
// const BACKEND_URL = 'localhost:3000';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

// const BASE_URL ="http://localhost:3000"
// const HOUSES_URL =`${BASE_URL}/houses`
//  const GUESTS_URL =`${BASE_URL}/guests`
const guestFormContainer = document.querySelector(".container")

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
        .then((guest) => {
    
   //   {
   
   
        // t.string "name"
        // t.string "phone_number"
        // t.string "address"
        // t.string "email"
        
        let guestsHTML = [guest].map(function() {  
             return`
    <div class="card">
   <div class="container">
   <h2>${guest.attribute}</h2>
   <ul>
   <li>
   <p> ${guest.name}</p>
   <p hidden>${guest.id}</p>
   <p>${guest.phone_number}</p>
   <p>${guest.address}</p>
   <p> ${guest.email}</p>
   </ul>
   <button data-guest-id=${guest.id}>delete guest card</button>
   </div>
   </div>
   `
    })
            
    document.querySelector("#guest-collection").innerHTML+= guestsHTML 
   })
        
       };
   
   
       // when click on create, the new form appear with input fielsd and submit button
   
   //     const input = document.getElementById('create-guest');
   //    input.addEventListener('click', function(event) {
   //   alert('I was clicked!');
   // });
   
//    let guests = []
   
   
//    document.getElementById("create-house").addEventListener('click', (e) => {
//         document.querySelector("#guest-collection").append(generateForm())
//    document.querySelector("#new-guest-card").addEventListener("submit", (e))
//    // prevent form from being submit and avoid error e.prevent delfault not a function
//     return false; 
//    let guest = e.target.elements.newguest.value
//    document.querySelector(".guests").append(guest)
//    })
   
   
//    const generateForm = () => {
        // const form = document.createElement("form")
        // const guestInput = document.createElement("input")
        // const submit = document.createElement("button")
   
   
   
        // form.id = "new-guest-card"
   
        // guestInput.id ="new-guest"
        // guestInput.placeholder = "create-guest"
        // guestInput.name = "newguest"
   
        
   
   
        // submit.classList.add("button")
        // submit.testContent ="create Guest!"
   
//         const guestInput = document.createElement("input")
//        const submit = document.createElement("button")
   
   
//         const form =
//    `
//    <div class="card">
//    <div class="container">
//    <h2>${guests.address}</h2>
//    <ul>
//    <li>
//    <p> ${guests.name}</p>
//    <p hidden>${guests.id}</p>
//    <p>${guests.phone_number}</p>
//    <p>${guests.address}</p>
//    <p> ${guests.email}</p>
//    </ul>
//    <button data-guest-id=${guests.id}>delete guest card</button>
//    </div>
//    </div>
//    `
    
   
   
   
   
//    form.id = "new-guest-card"
   
//     guestInput.id ="new-guest"
//    //  guestInput.placeholder = "create-guest"
//     guestInput.name = "newguest"
   
   
//         //  form.appendChild(guestInput)
//      //  form.appendChild(submit)

     

//      return form
// }
guestFormContainer.addEventListener("create-house", function(e){
     e.preventDefault()
     // console.log(e.target.name)
     const houseAddress = e.target.address.value
     const guestName = e.target.name.value
     const guestPhoneNumber = e.target.phone_number.value
     const guestAddress = e.target.address.value
     const guestEmail = e.target.email.value
     const guestTimeLine = e.target.time_line.value
     const guestComment = e.target.comment.value
   // console.log(guestName, guestPhoneNumber)
   
   fetch("http://localhost:3000/guests", {
   
   method:"POST",
   headers: {
     "Content-Type": "application/json",
     "Accept": "application/json"
      },
   
   body: JSON.stringify({
     address: houseAddress, 
     name: guestName,
     phone_number: guestPhoneNumber,
     email: guestEmail ,
     adress: guestAddress,
     time_line: guestTimeLine,
     comment: guestComment
   })
    })
   
    .then(r => r.json()) 
   //  .then(newGuest => console.log(newGuests))
   .then(newGuest=> {
   
     let newGuestHTML = `
     <div class="card">
     <div class="container">
     <h2>${guest.attribute}</h2>
     <ul>
     <li>
     <p> ${guest.name}</p>
     <p hidden>${guests.id}</p>
     <p>${guests.phone_number}</p>
     <p>${guests.address}</p>
     <p> ${guests.email}</p>
     <p>${guests.time_line}</p>
     <p> ${guests.comment}</p>
     </ul>
     <button data-guest-id=${guests.id}>delete guest card</button>
     </div>
     </div>
     `
     // document.querySelector("#toy-collection").innerHTML += newToy
     guestCollection.innerHTML += newGuestHTML
     console.log(e.target.reset())
   
     
     })
   
   
   })