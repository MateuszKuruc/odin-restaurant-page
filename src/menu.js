export default loadMenu;

function createMenu() {
  const menuList = document.createElement("div");
  menuList.classList.add("menuList");

  menuList.appendChild(
    createMenuItem("kremowka", 14.99, "pyszna kremowka, tak jak papiez lubi")
  );

  menuList.appendChild(
    createMenuItem('ciasteczko', 5.99, 'bardzo chrupkie i slodkie')
  );

  menuList.appendChild(
    createMenuItem('muffin', 7.99, 'cieplutkie i czekoladowe')
  )

  return menuList;
}

function createMenuItem(name, price, description) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemName = document.createElement('h3');
    itemName.innerHTML = name;
    item.appendChild(itemName);

    const itemPrice = document.createElement('h4');
    itemPrice.innerHTML = price;
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
console.log('elooo');
}
