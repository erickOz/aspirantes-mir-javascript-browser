const menu = [
  {
    name: 'Home',
    link: '/',
    items: []
  },
  {
    name: 'About',
    link: '/about',
    items: []
  },
  {
    name: 'Products',
    link: '/products',
    items: [
      {
        name: 'Product 1',
        link: '/products/1',
        items: []
      },
      {
        name: 'Product 2',
        link: '/products/2',
        items: [
          {
            name: 'Product 2.1',
            link: '/products/2/1',
            items: []
          },
        ]
      },
    ]
  },
  {
    name: 'Services',
    link: '/services',
    items: [
      {
        name: 'Service 1',
        link: '/services/1',
        items: [
          {
            name: 'Service 1.1',
            link: '/services/1/1',
            items: []
          },
        ]
      },
      {
        name: 'Service 2',
        link: '/services/2',
        items: [
          {
            name: 'Service 2.1',
            link: '/services/2/1',
            items: []
          },
          {
            name: 'Service 2.2',
            link: '/services/2/2',
            items: []
          },
        ]
      },
    ]
  },
]

const menuContainer = document.querySelector('#menu');
//const menuContainer = document.getElementById("#menu");
console.log(menuContainer);
// console.log("Holads");

let value = document.getElementById("#titulo").value;
console.log(value);

const createMenu = (menu, parent) => {
  const ul = document.createElement('ul')
  parent.appendChild(ul)
  menu.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = item.name
    a.href = item.link
    li.appendChild(a)
    ul.appendChild(li)
    if (item.items.length > 0) {
      createMenu(item.items, li)
    }
  })
}

//createMenu(menu, menuContainer);

//JS normalon
let x = document.getElementById("titulo");
console.log(x);
x.style.color = "red";
x.style.backgroundColor = "yellow";
x.style.fontSize = "30px";
