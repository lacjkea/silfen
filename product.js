const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea21-ed2b.restdb.io/rest/bags/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .season").textContent = product.season;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  document.querySelector(
    ".gallery img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}

<template class="product_template">
  <div class="gallery">
    <img src="" />
  </div>

  <h1>TITLE</h1>
  <h2>PRICE</h2>
  <h2>COLOR</h2>
  <div class="color_wrapper">
    <div class="color_circle one"></div>
    <div class="color_circle two"></div>
    <div class="color_circle three"></div>
  </div>

  <button type="button" id="buy_now">
    Buy Now
  </button>
  <button type="button" id="add_to_cart">
    Add to Cart
  </button>

  <p>Description</p>
</template>;
