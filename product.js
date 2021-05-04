const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea21-ed2b.restdb.io/rest/bags/" + id;
console.log(url);
fetch("https://kea21-ed2b.restdb.io/rest/bags/60868b9da1b4dd2000003ba2", {
  method: "GET",
  headers: {
    "x-apikey": "606d5e92f553500431007501",
  },
})
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    showSingleProduct(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showSingleProduct(product) {
  console.log(product);
  // const template = document.querySelector("#product_template").content;
  // products.forEach((product) => {
  //   const copy = template.cloneNode(true);
  document.querySelector(".gallery img").src = `${product.image}`;
  document.querySelector("h1").textContent = product.name;
  document.querySelector("h2").textContent = product.price + " DKK";
  document.querySelector("p").textContent = product.description;
  //   const parent = document.querySelector(".products");
  //   parent.appendChild(copy);
  // });
}
