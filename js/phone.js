console.log('hello phone foster');

// fetch api and loading data through search box
const loadData = () => {
  let inputField = document.getElementById("search-input");
  let inputFieldValue = inputField.value;
  inputField.value = '';

  //fetching api
  const url = `https://openapi.programming-hero.com/api/phones?search=${ inputFieldValue }`;
  fetch(url)
    .then(response => response.json())
    .then(phones => displayPhone(phones.data));
}

// display phones using display data function

const displayPhone = (phones) => {
  let showPhone = document.getElementById('display-phone');
  showPhone.textContent = "";
  phones =  phones.slice(0, 20);
  for (const phone of phones) {
    showPhone.innerHTML += `<div class="col-lg-4 my-2 col-md-6 d-flex justify-content-center">
                                  <div class="card rounded shadow border-0 p-3" style="width: 18rem;">
                                    <img src=${phone.image} class="card-img-top" alt="phones images">
                                    <div class="card-body">
                                      <h6 class="card-title">${ phone.brand } ${ phone.phone_name }</h6>
                                      <button onclick = "loadPhoneData('${phone.slug}')" class="btn btn-primary">See Details</button>
                                    </div>
                                  </div>
                                </div>`

  }
}

// phone data load using fetch api
const loadPhoneData = (phoneId) => { 
  console.log(phoneId)
  let urls = ` https://openapi.programming-hero.com/api/phone/${ phoneId }`;
  
  //fetch data to load data
  fetch(urls)
    .then(response => response.json())
    .then(details => displayPhoneDetails(details));
} 

// display phone details
const displayPhoneDetails = () => {
  let showDetail = document.getElementById('show-detail');
  console.log(showDetail)
}
