export default loadMenu;

function createMenu() {
  const menuList = document.createElement("div");
  menuList.classList.add("menuList");

  menuList.appendChild(
    createMenuItem("Macarons", 14.99, "Bite-sized clouds of deliciousness that will make you question how something so small can bring so much joy (and sugar) into your life.")
  );

  menuList.appendChild(
    createMenuItem('Chocolate truffles', 5.99, `Little balls of pure chocolate bliss that magically disappear faster than you can say "one more won't hurt."`)
  );

  menuList.appendChild(
    createMenuItem('Cupcakes', 7.99, 'Happiness in a handheld package, these mini cakes with delightful frosting are basically an excuse to eat dessert for breakfast, lunch, and dinner.')
  );

menuList.appendChild(
    createMenuItem('Doughnuts', 12.99, 'The torus-shaped wonders that prove life is better with a hole in the middle and a sweet glaze on top. Resistance is futile.')
);

menuList.appendChild(
    createMenuItem('Cheesecake', 14.50, `A slice of creamy heaven that whispers sweet nothings to your taste buds and has the power to turn any frown upside down (unless you're lactose intolerant).`)
);

menuList.appendChild(
    createMenuItem('Apple pie', 8.50, 'A warm embrace of spiced apples and flaky crust, this dessert has the audacity to make you believe that eating fruit is healthy (despite the buttery deliciousness).')
);

  return menuList;
}

function createMenuItem(name, price, description) {
    const item = document.createElement('div');
    item.classList.add('item');

const itemPic = document.createElement('img');
itemPic.classList.add('itemPic');
itemPic.src = `../img/${name}.jpg`;
itemPic.alt = `${name}.jpg`;
item.appendChild(itemPic);

    const itemName = document.createElement('h3');
    itemName.innerHTML = name;
    item.appendChild(itemName);

    const itemPrice = document.createElement('h4');
    itemPrice.innerHTML = price + ' ' + 'EUR';
    item.appendChild(itemPrice);

    const itemDescription = document.createElement('p');
    itemDescription.innerHTML = description;
    item.appendChild(itemDescription);

    return item;
}

function loadMenu() {
const mainBody = document.querySelector('.mainBody');
mainBody.innerHTML = '';
mainBody.appendChild(createMenu());
}

