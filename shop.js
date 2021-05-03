fetch("https://kea21-ed2b.restdb.io/rest/bags", {
  method: "GET",
  headers: {
    "x-apikey": "606d5e92f553500431007501",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProducts(products) {
  console.log(products);
  const template = document.querySelector("#bag_template").content;
  products.forEach((product) => {
    const copy = template.cloneNode(true);
    copy.querySelector("a").href += `?id=${product._id}`;
    copy.querySelector(".img_wrapper a img").src = `${product.image}`;
    copy.querySelector("h2.bag_title").textContent = product.name;
    copy.querySelector("p span").textContent = product.price;
    const parent = document.querySelector(".products");
    parent.appendChild(copy);
  });
}

// <template id="bag_template">
//           <article class="product_article">
//             <div class="img_wrapper">
//               <a href="productpage.html"
//                 ><img class="productimage" src="" alt=""
//               /></a>
//             </div>

//             <div class="info">
//               <h2 class="bag_title"></h2>

//               <div class="price_wrapper">
//                 <p class="price"><span></span>DKK</p>
//               </div>

//               <div class="color_wrapper">
//                 <div class="color_circle one"></div>
//                 <div class="color_circle two"></div>
//                 <div class="color_circle three"></div>
//               </div>
//             </div>
//           </article>
//         </template>



https://kea21-ed2b.restdb.io/rest/bags?q={"type" : {"$in" : ["bumbags"]}}
https://mydb-fafc.restdb.io/rest/people?q={"name" : {"$in" : ["Joe", "Jane", "Donald"]}}



// new arrivals, bumbags, crossbody bags, wallets, mini bags, shoulder bags, tote bags, care