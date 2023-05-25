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

function createBody() {
  const mainBody = document.createElement("div");
  mainBody.classList.add("mainBody");

  const bodyTitle = document.createElement("h1");
  bodyTitle.innerHTML = "Fancy sweetness overload?";
  mainBody.appendChild(bodyTitle);

//   const backgroundImg = document.createElement('img');
//   backgroundImg.classList.add('background');
//   backgroundImg.src = '../img/background.jpg';
//   mainBody.appendChild(backgroundImg);

    const bodyText = document.createElement('p');
    bodyText.classList.add('bodyText')
    bodyText.innerHTML = 'If you are longing for a sweet place where you can spend some time to boost your energy (and sugar!), look no further. Sweets Factory is here to fill cravings of each and every sweet tooth wandering aorund!'
    mainBody.appendChild(bodyText);
  return mainBody;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    const signature = document.createElement('h4');
    signature.innerHTML = 'Mateusz Kuruc 2023';
    footer.appendChild(signature);

    return footer;
}

function startWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createBody());
  content.appendChild(createFooter());
}
