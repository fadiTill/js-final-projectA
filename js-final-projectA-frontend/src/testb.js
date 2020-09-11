

guestContainer.addEventListener("submit", function(e){
    e.preventDefault();


//     def guest_params
//     params.require(:guest).permit(:name, :phone_number, :address, :email, :time_line, :comment, :house_id)
// end 
// end


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
   .then(function(bject) {
//   .then(guests => {
     console.log(object);
   });
 })


// let guestsHTML = 
//     `
//     <div  id="card" class="card">
//     <div class="container">
//     <p> ${guest.house_id}</p>
//     <h2> ${guest.house_id.address} </h2>
//     <ul>
//     <li>
//     <p> ${guest.name}</p>
//     <p hidden>${guest.id}</p>
//     <p>${guest.phone_number}</p>
//     <p>${guest.address}</p>
//     <p> ${guest.email}</p>
//     <p>${guest.time_line}</p>
//     <p> ${guest.comment}</p>
//     </ul>
//     </div>
//     </div>
// `
// })
   
// document.querySelector("#guest-collection").innerHTML+= Object.id.join('') 
// })


    
  
    
  







     