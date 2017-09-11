function fetchPerson(id){

  fetch(`https://randomuser.me/api/?nat=us`)
    .then( function(response){
      return response.json()
    })
    .then( function(json){
      console.log("data", json)

      var person = {}
      person.name = json.results[0].name.first + " " + json.results[0].name.last;
      person.street = json.results[0].location.street;
      person.email = json.results[0].email;
      person.address2 = json.results[0].location.city + ", " + json.results[0].location.state + " " + json.results[0].location.postcode;
      person.phone = json.results[0].phone;
      person.icon = json.results[0].picture.large;
      person.ssn = json.results[0].id.value;

      const html = `
        <div class="personmer">
          <div class="personimg"><img src="${person.icon}"></div>
          <div class="name">
            <a href="${json.url}">${person.name}</a>
          </div>
          <div class="email">
            <a href="${person.email}">${person.email}</a>
          </div>
          <div class="street">${person.street}</div>
          <div class="address2">${person.address2}</div>
          <div class="phone">${person.phone}</div>
          <div class="ssn">${person.ssn}</div>
        </div>
        `

      document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
    })
}
for (var i = 1; i <= 12; i++) {
  fetchPerson(i)
}
