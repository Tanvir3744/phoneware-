

//show spinner to website 
const showSpinner = (displayClass) => {
  let spinner = document.getElementById('spinner');
  spinner.style.display = displayClass;
}


// fetch api and loading data through search box
const loadData = () => {
  let inputField = document.getElementById("search-input");
  showSpinner('block');
  let inputFieldValue = inputField.value;

  // grab detail element
  let detailElement = document.getElementById('show-detail');
  detailElement.textContent = "";

  /* check if search box is empty or not */
  let empty = document.getElementById('empty');
  if (inputFieldValue == '') {
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
  }


  /* clear value */
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

  //check if any device is not found in ui
  let notFound = document.getElementById('not-found');
  if (phones.length == 0) {
    notFound.style.display = 'block';
  } else {
    notFound.style.display = 'none';
  }

  phones = phones.slice(0, 20);
  for (const phone of phones) {
    showPhone.innerHTML += `<div class="col-lg-4 my-2 col-md-6 d-flex justify-content-center">
                                  <div class="card rounded shadow border-0 p-3" style="width: 18rem;">
                                    <img src=${ phone.image } class="card-img-top" alt="phones images">
                                    <div class="card-body">
                                      <h6 class="card-title">${ phone.brand } ${ phone.phone_name }</h6>
                                      <button onclick = "loadPhoneData('${ phone.slug }')" class="btn btn-primary">See Details</button>
                                    </div>
                                  </div>
                                </div>`
  }
  showSpinner('none');
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
const displayPhoneDetails = (details) => {
  let phone = details.data;


  //check if there any release date or not
  if (phone.releaseDate == '') {
    phone.releaseDate = 'realease date not found'
  }

  //check if there is not any others option
  let showDetail = document.getElementById('show-detail');
  showDetail.textContent = "";
  if (phone.others == undefined) {
    showDetail.innerHTML = `<div class="col-lg-10 mb-3 d-flex justify-content-center  ">
    <div class="card border-0 rounded shadow p-4  " style="width: 52rem">
     <div class = "image text-center">
     <img id="heading-img" src=${ phone.image } class="card-img-top img-fluid" alt="..." />
     <h3 class ="h2 mt-2"><strong> ${ phone.brand } ${ phone.name }  </strong></h3>
     </div>
      <div class="card-body detail-panel">

        <!-- product intruductory section -->
        <h2 class="h5 fw-bold">Specifications :</h2>
        <table class="table">
          <tbody>
            <tr>                    
              <th>Brand :</td>
              <td>${ phone.brand }</td>                    
            </tr>
            <tr>                     
              <th>Name :</td>
              <td>${ phone.name }</td>                    
            </tr>
            <tr>                     
              <th>Released :</td>
              <td>${ phone.releaseDate }</td>                    
            </tr>
          </tbody>
        </table>   

        <!-- connectivites  -->
        <h2 class="h5 fw-bold">Connectivites (Others) :</h2>
        
        <!-- main features -->
        <h2 class="h5 fw-bold">Main Features :</h2>
        <table class="table">
          <tbody>
            <tr>                    
              <th>Storage :</td>
              <td>${ phone.mainFeatures.storage }</td>                    
            </tr>
            <tr>                     
              <th>Display Size :</td>
              <td>${ phone.mainFeatures.displaySize }</td>                    
            </tr>
            <tr>                     
              <th>Chipset :</td>
              <td>${ phone.mainFeatures.chipSet }</td>                    
            </tr>
            <tr>                     
              <th>Memory :</td>
              <td>${ phone.mainFeatures.memory }</td>                    
            </tr>
            <tr>                     
              <th>Sensor :</td>
              <td>${ phone.mainFeatures.sensors }</td>                    
            </tr>
          </tbody>
        </table>   

      </div>
    </div>
  </div>`;
  } else {
    showDetail.innerHTML = `<div class="col-lg-10 mb-3 d-flex justify-content-center  ">
    <div class="card border-0 rounded shadow p-4  " style="width: 52rem">
     <div class = "image text-center">
     <img id="heading-img" src=${ phone.image } class="card-img-top img-fluid" alt="..." />
     <h3 class ="h2 mt-2"><strong> ${ phone.brand } ${ phone.name }  </strong></h3>
     </div>
      <div class="card-body detail-panel">

        <!-- product intruductory section -->
        <h2 class="h5 fw-bold">Specifications :</h2>
        <table class="table">
          <tbody>
            <tr>                    
              <th>Brand :</td>
              <td>${ phone.brand }</td>                    
            </tr>
            <tr>                     
              <th>Name :</td>
              <td>${ phone.name }</td>                    
            </tr>
            <tr>                     
              <th>Released :</td>
              <td>${ phone.releaseDate }</td>                    
            </tr>
          </tbody>
        </table>   

        <!-- connectivites  -->
        <h2 class="h5 fw-bold">Connectivites (Others) :</h2>
        <table class="table">
          <tbody>
            <tr>                    
              <th>WLAN :</td>
              <td>${ phone.others.WLAN }</td>                    
            </tr>
            <tr>                     
              <th>Bluetooh :</td>
              <td>${ phone.others.Bluetooth }</td>                    
            </tr>
            <tr>                     
              <th>GPS :</td>
              <td>${ phone.others.GPS }</td>                    
            </tr>
            <tr>                     
              <th>NFC :</td>
              <td>${ phone.others.NFC }</td>                    
            </tr>
            <tr>                     
              <th>Radio :</td>
              <td>${ phone.others.Radio }</td>                    
            </tr>
            <tr>                     
              <th>USB :</td>
              <td>${ phone.others.USB }</td>                    
            </tr>
          </tbody>
        </table>   


        <!-- main features -->
        <h2 class="h5 fw-bold">Main Features :</h2>
        <table class="table">
          <tbody>
            <tr>                    
              <th>Storage :</td>
              <td>${ phone.mainFeatures.storage }</td>                    
            </tr>
            <tr>                     
              <th>Display Size :</td>
              <td>${ phone.mainFeatures.displaySize }</td>                    
            </tr>
            <tr>                     
              <th>Chipset :</td>
              <td>${ phone.mainFeatures.chipSet }</td>                    
            </tr>
            <tr>                     
              <th>Memory :</td>
              <td>${ phone.mainFeatures.memory }</td>                    
            </tr>
            <tr>                     
              <th>Sensor :</td>
              <td>${ phone.mainFeatures.sensors }</td>                    
            </tr>
          </tbody>
        </table>   

      </div>
    </div>
  </div>`;
  }



}
