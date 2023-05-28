export default loadContact;

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phone = document.createElement("p");
  phone.innerHTML = "☎️ 555 555 555";

  const address = document.createElement("p");
  address.innerHTML = "🏠 Plebiscytowa HQ, Katowice, 40-035";

  const map = document.createElement("img");
  map.classList.add("map");
  map.src = "../img/map.png";

  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(map);

  return contact;
}

function loadContact() {
  const mainBody = document.querySelector(".mainBody");
  mainBody.innerHTML = "";
  mainBody.appendChild(createContact());
}
