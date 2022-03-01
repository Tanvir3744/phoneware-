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
    showPhone.innerHTML += `<div class="col-lg-4 my-2 ">
                                  <div class="card rounded shadow border-0 p-3" style="width: 18rem;">
                                    <img src=${phone.image} class="card-img-top" alt="phones images">
                                    <div class="card-body">
                                      <h6 class="card-title">${ phone.brand } ${ phone.phone_name }</h6>
                                      <a href="#" class="btn btn-primary">See Details</a>
                                    </div>
                                  </div>
                                </div>`
  }
}