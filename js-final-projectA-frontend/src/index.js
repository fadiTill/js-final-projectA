//  console.log("testing...")
// test that we can get data from the backend
// const BACKEND_URL = 'localhost:3000';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

const BASE_URL ="http://localhost:3000"
const HOUSES_URL =`${BASE_URL}/houses`
 const GUESTS_URL =`${BASE_URL}/guests`


document.addEventListener('DOMcontentLoaded',() => {
    getHouses()
})


const main = () => {
return document.querySelector('main')
}

  const getHouses = () => {
 fetch('http://localhost:3000/houses')
 .then(response => response.json())
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
    <p>$(houseObj.adress)<p>
    <button data-house-id =${houseObj.id}.id>add Guest</button>
`

    houseCard.lastElementChild.addEventListener('click', handleAddGuest)
    main().appendchild(houseCard)
    let guestList = document.create('ul')
    houseCard.appendChild(guestsList)
    houseObj.guests.forEach(guest =>
        renderGuest(guest, guestList)
        )
    }
    
    

    

 