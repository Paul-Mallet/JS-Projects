
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    }
]

const div = document.querySelector(".section-center")


let i_values = -1


function displayMenu (menu) {
  for (let i = 0; i < menu.length; i++) {
    i_values++

    const create_article = document.getElementById("menu-item-template").content.cloneNode(true)

    div.prepend(create_article)

    const img_info = document.querySelector(".photo")
    img_info.setAttribute("src", menu[i_values].img)

    const title_info = document.querySelector(".item-info header h4:first-child")
    title_info.innerText = menu[i_values].title

    const price_info = document.querySelector(".price")
    price_info.innerText = menu[i_values].price

    const desc_info = document.querySelector(".item-text")
    desc_info.innerText = menu[i_values].desc
  }
}


function removeMenu () {
  const suppr_article = document.querySelectorAll(".menu-item").forEach(article => {
    article.remove()
  })
  return suppr_article
}


window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
});


const filter_btn = document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const data_value = e.currentTarget.getAttribute("data-id")
    const categories = menu.filter(function (menuItem) {
      if (menuItem.category === data_value) {
        return menuItem
      }
    })
    if (data_value === "all") {
      i_values = -1
      removeMenu(menu)
      displayMenu(menu)
    } else {
      i_values = -1
      removeMenu(menu)
      displayMenu(categories)
    }
  })
})

// // get parent element
// const sectionCenter = document.querySelector(".section-center");
// const btnContainer = document.querySelector(".btn-container");
// // display all items when page loads
// window.addEventListener("DOMContentLoaded", function () {
//   diplayMenuItems(menu);
//   displayMenuButtons();
// });

// Correction avec .map, innerHTML et .join -> créer 1 copie de menu et descend d'un niveau pour accéder aux valeurs

// function diplayMenuItems(menuItems) {
//   let displayMenu = menuItems.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   // console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;
// }


// filterBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(e.currentTarget.dataset);
//     const category = e.currentTarget.dataset.id;
//     const menuCategory = menu.filter(function (menuItem) {
//       // console.log(menuItem.category);
//       if (menuItem.category === category) {
//         return menuItem;
//       }
//     });
//     if (category === "all") {
//       diplayMenuItems(menu);
//     } else {
//       diplayMenuItems(menuCategory);
//     }
//   });
// });