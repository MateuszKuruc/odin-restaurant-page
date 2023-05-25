export default startWebsite;

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.innerHTML = "Sweets factory";
  header.appendChild(restaurantName);

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("navBar");

  const homeButton = document.createElement("button");
  homeButton.classList.add("btn-home");
  homeButton.innerHTML = "Home";
  nav.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.classList.add("btn-menu");
  menuButton.innerHTML = "Menu";
  nav.appendChild(menuButton);

  const contactButton = document.createElement("button");
  contactButton.classList.add("btn-contact");
  contactButton.innerHTML = "Contact";
  nav.appendChild(contactButton);

  return nav;
}

function startWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createNav());
}
