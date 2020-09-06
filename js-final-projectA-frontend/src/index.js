
const guestFormContainer = document.querySelector(".container")

document.addEventListener("DOMContentLoaded",() => {

    
     getGuests()
   
      });
   
   
   
   
   
   
       const getGuests = () => {
        fetch('http://localhost:3000/guests')
        .then(response => response.json())
        .then(guests => {
    
   
   
   
       
        
        let guestsHTML = guests.map(function(guest) {  
             return`
             <div class="card">
             <div class="container">
             <h2>${guest.house.address}</h2>
             <ul>
             <li>
             <p> ${guest.name}</p>
             <p hidden>${guest.id}</p>
             <p>${guest.phone_number}</p>
             <p>${guest.address}</p>
             <p> ${guest.email}</p>
             <p>${guest.time_line}</p>
             <p> ${guest.comment}</p>
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
   
       const input = document.getElementById("create-guest");
      input.addEventListener('click', function(event) {
     alert('I was clicked!');
   });
   
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
// guestContainer.addEventListener("create-guest", function(e){
//      e.preventDefault()
//       console.log("DONE")
//      const houseAddress = e.target.address.value
//      const guestName = e.target.name.value
//      const guestPhoneNumber = e.target.phone_number.value
//      const guestAddress = e.target.address.value
//      const guestEmail = e.target.email.value
//      const guestTimeLine = e.target.time_line.value
//      const guestComment = e.target.comment.value
//    // console.log(guestName, guestPhoneNumber)
   
//    fetch("http://localhost:3000/guests", {
   
//    method:"POST",
//    headers: {
//      "Content-Type": "application/json",
//      "Accept": "application/json"
//       },
   
//    body: JSON.stringify({
//      address: houseAddress, 
//      name: guestName,
//      phone_number: guestPhoneNumber,
//      email: guestEmail ,
//      adress: guestAddress,
//      time_line: guestTimeLine,
//      comment: guestComment
//    })
//     })
   
//     .then(r => r.json()) 
//    //  .then(newGuest => console.log(newGuests))
//    .then(newGuest=> {
   
//      let newGuestHTML = `
//      <div class="card">
//      <div class="container">
//      <h2>${guest.attribute}</h2>
//      <ul>
//      <li>
//      <p> ${guest.name}</p>
//      <p hidden>${guest.id}</p>
//      <p>${guest.phone_number}</p>
//      <p>${guest.address}</p>
//      <p> ${guest.email}</p>
//      <p>${guest.time_line}</p>
//      <p> ${guest.comment}</p>
//      </ul>
//      <button data-guest-id=${guest.id}>delete guest card</button>
//      </div>
//      </div>
//      `
//      // document.querySelector("#toy-collection").innerHTML += newToy
//      guestCollection.innerHTML += newGuestHTML
//      console.log(e.target.reset())
   
     
//      })
   
   
//    })