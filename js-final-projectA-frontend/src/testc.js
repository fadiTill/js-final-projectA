
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
             <p hidden>${guest.house_id}</p>
             <h2> ${guest.house.address} </h2>
             <ul>
             <p> ${guest.name}</p>
             <p hidden>${guest.id}</p>
             <p>${guest.phone_number}</p>
             <p>${guest.address}</p>
             <p> ${guest.email}</p>
             <p>${guest.time_line}</p>
             <p> ${guest.comment}</p>
             <button id="data-guest-id">delete</button>
             </ul>
             </div>
             </div>
   `
    })
            
    document.querySelector("#guest-collection").innerHTML+= guestsHTML.join('') 
   })
        
       };

       const addGuest =   guestContainer.addEventListener("submit", function(e){
        e.preventDefault();


        let formData = {
            name:    guestContainer.querySelector("#name").value,
            phone_number: guestContainer.querySelector("#phone_number").value,
            address: guestContainer.querySelector("#address").value,
            email: guestContainer.querySelector("#email").value,
            time_line: guestContainer.querySelector("#time_line").value,
            house_id: guestContainer.querySelector("#house_id").value
           
        };
           
        let configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        };
         
        fetch("http://localhost:3000/guests", configObj)
          .then(function(response) {
            return response.json();
          })
           .then(function(object) {
        //   .then(guests => {
            //  
        //    });
        //  })

    function newGuestHTML(){
        `
        <div  id="card" class="card">
             <div class="container">
             <p hidden>${guest.house_id}</p>
             <h2> ${guest.house.address} </h2>
             <ul>
             <p> ${guest.name}</p>
             <p hidden>${guest.id}</p>
             <p>${guest.phone_number}</p>
             <p>${guest.address}</p>
             <p> ${guest.email}</p>
             <p>${guest.time_line}</p>
             <p> ${guest.comment}</p>
             <button id="data-guest-id">delete</button>
             </ul>
             </div>
             </div>
       `
         
       // guestarray.push(newGuestHTML);
       document.querySelector("#guest-collection").innerHTML += newGuestHTML
       //  console.log(event.target.reset())
         document.forms[0].reset()
    }
}         
           )});

           function change() {  document.getElementById('data-guest-id'),
              document.addEventListener('click', function(e) {
               alert('I was clicked!')
              });
            
          
              const handleReleaseGuest = (e) => {
               fetch('http://localhost:3000/guests/${e.target.dataset}', {
                 method: "DELETE"
               })
               .then(r => r.json())
               .then(guest => removeGuest(guest.id))
             }
            }
          
             const removeGuest = (id) => {
             let cardToRemove = document.getElementById(`{guest.id)`)
             cardToRemove.parentElement.removeChild(cardToRemove)
             }
           
