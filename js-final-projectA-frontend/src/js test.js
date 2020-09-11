const BASE_URL = "http://localhost:3000"
const HOUSES_URL = `${BASE_URL}/houses`
const GUESTS_URL = `${BASE_URL}/guests`

document.addEventListener('DOMContentLoaded', () => {
    getHouses()
  })
  
  const main = () => {
    return document.querySelector('main')
  }
  
  const getHouses = () => {
    fetch('http://localhost:3000/houses')
    .then(r => r.json())
    .then(data => renderHouses(data))
  }
  
  const renderHouses = (housesData) => {
    housesData.forEach(house => renderHouseCard(house))
  }
  
  const renderHouseCard = (houseObj) => {
    let houseCard = document.createElement('div')
    houseCard.className = "card"
    houseCard.dataset.id = houseObj.id
    houseCard.innerHTML = `
      <p>${houseObj.address}</p>
      <button data-trainer-id=${houseObj.id}>Add Guest</button>
    `
    houseCard.lastElementChild.addEventListener('click', handleAddGuest)
    main().appendChild(houseCard)
    let guestsList = document.createElement('ul')
    houseCard.appendChild(guestsList)
    houseObj.guests.forEach(guest =>
      renderGuest(guest, guestsList)
    )
  }
  
  const renderGuest = (guest, list, e) => {
    let guestCard = document.createElement('li')
    guestCard.id = `guest-${guest.id}`
    guestCard.innerText = `${guest.name}(${guest.phone_number})(${guest.house_id})`
    let releaseBtn = document.createElement('button')
    releaseBtn.className = "release"
    releaseBtn.dataset.guestId = guest.id
    releaseBtn.innerText = "Release"
    releaseBtn.addEventListener('click', handleReleaseGuest)
    guestCard.appendChild(releaseBtn)
    if(!list){
      list = e.target.parentElement.lastElementChild
    }
    list.appendChild(guestCard)
  }
  
  const handleReleaseGuest = (e) => {
    fetch(GUESTS_URL+`/${e.target.dataset.guestId}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(guest => removeGuest(guest.id))
  }
  
  const removeGuest = (id) => {
    let cardToRemove = document.getElementById(`guest-${id}`)
    cardToRemove.parentElement.removeChild(cardToRemove)
  }
  
  const handleAddGuest = (e) => {
    console.log("adding guest...")
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        house_id: e.target.dataset.houseId
      })
    }
    fetch(GUESTS_URL, configObj)
    .then(r => r.json())
    .then(data => addGuestToDom(data, e))
  }
  
 




