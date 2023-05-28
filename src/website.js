export default startWebsite;
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const restaurantLogo = document.createElement("img");
  restaurantLogo.src = "../img/sweet.png";

  const restaurantName = document.createElement("h1");
  restaurantName.innerHTML = "Sweets Factory";

  header.appendChild(restaurantLogo);
  header.appendChild(restaurantName);

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("navBar");

  const homeButton = document.createElement("button");
  homeButton.classList.add("btn-home");
  homeButton.innerHTML = "Home";
  homeButton.addEventListener("click", getHomepage);

  const menuButton = document.createElement("button");
  menuButton.classList.add("btn-menu");
  menuButton.innerHTML = "Menu";
  menuButton.addEventListener("click", loadMenu);

  const contactButton = document.createElement("button");
  contactButton.classList.add("btn-contact");
  contactButton.innerHTML = "Contact";
  contactButton.addEventListener("click", loadContact);

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createBody() {
  const mainBody = document.createElement("div");
  mainBody.classList.add("mainBody");

  return mainBody;
}

function getHomepage() {
  const mainBody = document.querySelector(".mainBody");
  mainBody.innerHTML = "";

  const homeText = document.createElement("div");
  homeText.classList.add("homeText");

  const restaurantName = document.createElement("h1");
  restaurantName.innerHTML = "Sweets Factory";

  const bodyTitle = document.createElement("h2");
  bodyTitle.innerHTML = "Fancy sweetness overload?";

  const bodyText = document.createElement("p");
  bodyText.classList.add("bodyText");
  bodyText.innerHTML =
    "If you are longing for a sweet place where you can spend some time to boost your energy (and sugar), look no further! Sweets Factory is here to fill cravings of each and every sweet tooth wandering around!";

  homeText.appendChild(restaurantName);
  homeText.appendChild(bodyTitle);
  homeText.appendChild(bodyText);

  mainBody.appendChild(homeText);
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const signature = document.createElement("h4");
  signature.innerHTML = "Mateusz Kuruc 2023";

  const githubImg = document.createElement("img");
  githubImg.src = "../img/github.svg";

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/MateuszKuruc?tab=repositories";
  githubLink.target = "blank";

  githubLink.appendChild(githubImg);

  footer.appendChild(signature);
  footer.appendChild(githubLink);

  return footer;
}

function startWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createBody());
  content.appendChild(createFooter());

  getHomepage();
}
