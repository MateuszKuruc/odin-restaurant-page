export default loadMenu;

function createMenu() {
  const menuList = document.createElement("div");
  menuList.classList.add("menuList");

//   const item1 = document.createElement('div');
  const item1 = createMenuItem('kremowka', 14,99, 'pyszna kremowka, tak jak papiez lubi');
  
  return menuList;
}

function createMenuItem(name, price, description) {
  return {
    name: name,
    price: price,
    description: description,
  };
}

function loadMenu() {
  const content = document.getElementById("content");
  content.appendChild(createMenu());
}
