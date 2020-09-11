

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
             <div  id="card" class="card">
             <div class="container">
             <p> ${guest.house_id}</p>
             <h2> ${guest.house_id.address} </h2>
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
             </div>
             </div>
   `
    })
            
    document.querySelector("#guest-collection").innerHTML+= guestsHTML.join('') 
   })
        
       };

//  let guestarray = []

   const addGuest =    guestContainer.addEventListener("submit", function(e){
        e.preventDefault();

         const input = 
         {
           house_id: guestContainer.querySelector("#house_id").value,
           address: guestContainer.querySelector("#house_address").value,
           name:    guestContainer.querySelector("#name").value,
           phone_number: guestContainer.querySelector("#phone_number").value,
           address: guestContainer.querySelector("#address").value,
           email: guestContainer.querySelector("#email").value,
           time_line: guestContainer.querySelector("#time_line").value,
           comment: guestContainer.querySelector("#comment").value
           
           
         }    
           console.log(input)
            // guestarray.push(Object);
        //  document.forms[0].reset()




        // console.log(input.value)
        // const guest.name = e.target.name.value;
        // const houseAddress = e.target.address.value;
        // const guestPhoneNumber = e.target.phone_number.value;
        // const guestAddress = e.target.address.value;
        // const guestEmail = e.target.email.value;
        // const guestTimeLine = e.target.time_line.value;
        // const guestComment = e.target.comment.value
       
       })
       fetch("http://localhost:3000/guests", {

        method:"POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
           },
          

          body: JSON.stringify({
            "house_id":house_id,
            "name": name,
            "address": address,
            "phone_number": phone_number,
            "email": email,
            "time_line": time_line, 
            "comment": comment

          })
          })
          .then(r => r.json()) 
          //  .then(newToy => console.log(newToy))
          .then(newGuest => {
         
             let newGuestHTML = `
             <div  id="card" class="card">
             <div class="container">
             <h2>${newGuest.address}</h2>
             <p hidden>${newGuest.house_id}</p>
             <ul>
             <li>
             <p> ${newGuest.name}</p>
             <p hidden>${newGuest.id}</p>
             <p>${newGuest.phone_number}</p>
             <p>${newGuest.address}</p>
             <p> ${newGuest.email}</p>
             <p>${newGuest.time_line}</p>
             <p> ${newGuest.comment}</p>
             </ul>
             </div>
             </div>
            `
            // guestarray.push(newGuestHTML);
            document.querySelector("#guest-collection").innerHTML += newGuestHTML
            //  console.log(event.target.reset())
            //  document.forms[0].reset()
           })         



















   
   
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
    
   
   
   
   
// //    form.id = "new-guest-card"
   
// //     guestInput.id ="new-guest"
// //    //  guestInput.placeholder = "create-guest"
// //     guestInput.name = "newguest"
   
   
// //         //  form.appendChild(guestInput)
// //      //  form.appendChild(submit)

     

// //      return form
// // }
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
// let guests = []


// document.getElementById("create-guest").addEventListener('click', (e) => {
//      document.querySelector("#guest-collection").append(generateForm())
// // document.querySelector("#new-guest-card").addEventListener("submit", (e))
// // prevent form from being submit and avoid error e.prevent delfault not a function
//  return false; 
// let guest = e.target.elements.newguest.value
// document.querySelector("#guest-collection").append(guest)
// })


// const generateForm = () => {
//      // const form = document.createElement("form")
//      // const guestInput = document.createElement("input")
//      // const submit = document.createElement("button")



//      // form.id = "new-guest-card"

//      // guestInput.id ="new-guest"
//      // guestInput.placeholder = "create-guest"
//      // guestInput.name = "newguest"

     


//      // submit.classList.add("button")
//      // submit.testContent ="create Guest!"

//      const guestInput = document.createElement("input")
//      const submit = document.createElement("button")


//      const form =
// `
// <form>
// <div class="card">
// <div class="container">
// <h2>"guests.house.address"</h2>
// <ul>
// <li>
// <p> ${ guestInput.name }</p>
// <p hidden>${guestInput.id}</p>
// <p>"guests.phone_number"</p>
// <p>"guests.address"</p>
// <p> "guests.email"</p>
// </ul>
// <button data-guest-id="guests.id">delete guest card</button>
// </div>
// </div>
// </form>
// `
// form.id = "new-guest-card"

// guestInput.id ="new-guest"
// //  guestInput.placeholder = "create-guest"
// guestInput.name = "newguest"




//       // form.appendChild(guestInput)
//       // form.appendChild(submit)

    

//     return form
// }


// const change = document.getElementById('data-guest-id');
//    document.addEventListener('click', function(event) {
//   //  alert('I was clicked!');

//   const handleReleaseGuest = (e) => {
//     fetch('http://localhost:3000/guests/:id}', {
//       method: "DELETE"
//     })
//     .then(r => r.json())
//     .then(guest => removeGuest(guest.id))
//   }
//  });

//  const removeGuest = (id) => {
//   let cardToRemove = document.getElementById(`{guest.id)`)
//   cardToRemove.parentElement.removeChild(cardToRemove)







// const BASE_URL = "http://localhost:3000"
// const HOUSES_URL = `${BASE_URL}/houses`
// const GUESTS_URL = `${BASE_URL}/guests`

// document.addEventListener('DOMContentLoaded', () => {
//     getHouses()
//   })
  
//   const main = () => {
//     return document.querySelector('main')
//   }
  
//   const getHouses = () => {
//     fetch('http://localhost:3000/houses')
//     .then(r => r.json())
//     .then(data => renderHouses(data))
//   }
  
//   const renderHouses = (housesData) => {
//     housesData.forEach(house => renderHouseCard(house))
//   }
  
//   const renderHouseCard = (houseObj) => {
//     let houseCard = document.createElement('div')
//     houseCard.className = "card"
//     houseCard.dataset.id = houseObj.id
//     houseCard.innerHTML = `
//       <p>${houseObj.address}</p>
//       <button data-trainer-id=${houseObj.id}>Add Guest</button>
//     `
//     houseCard.lastElementChild.addEventListener('click', handleAddGuest)
//     main().appendChild(houseCard)
//     let guestsList = document.createElement('ul')
//     houseCard.appendChild(guestsList)
//     houseObj.guests.forEach(guest =>
//       renderGuest(guest, guestsList)
//     )
//   }
  
//   const renderGuest = (guest, list, e) => {
//     let guestCard = document.createElement('li')
//     guestCard.id = `guest-${guest.id}`
//     guestCard.innerText = `${guest.name}(${guest.phone_number})(${guest.house_id})`
//     let releaseBtn = document.createElement('button')
//     releaseBtn.className = "release"
//     releaseBtn.dataset.guestId = guest.id
//     releaseBtn.innerText = "Release"
//     releaseBtn.addEventListener('click', handleReleaseGuest)
//     guestCard.appendChild(releaseBtn)
//     if(!list){
//       list = e.target.parentElement.lastElementChild
//     }
//     list.appendChild(guestCard)
//   }
  
//   const handleReleaseGuest = (e) => {
//     fetch(GUESTS_URL+`/${e.target.dataset.guestId}`, {
//       method: "DELETE"
//     })
//     .then(r => r.json())
//     .then(guest => removeGuest(guest.id))
//   }
  
//   const removeGuest = (id) => {
//     let cardToRemove = document.getElementById(`guest-${id}`)
//     cardToRemove.parentElement.removeChild(cardToRemove)
//   }
  
//   const handleAddGuest = (e) => {
//     console.log("adding guest...")
//     let configObj = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         house_id: e.target.dataset.houseId
//       })
//     }
//     fetch(GUESTS_URL, configObj)
//     .then(r => r.json())
//     .then(data => addGuestToDom(data, e))
//   }
  
//   // const addPokemonToDom = (data, e) => {
//   //   if(data.message){
//   //     alert(data.message)
//   //   } else {
//   //     renderPokemon(data, undefined, e)
//   //   }
//   // }























