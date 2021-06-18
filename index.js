console.log("Script loaded");

let mainListWrapper = document.getElementById("item-cards-wrapper");

let createCardsDynamically = (url, name, desc) => {
  let cardItem = document.createElement("div");
  cardItem.className = "item-cards";
  let cardImg = document.createElement("img");
  cardImg.className = "item-cards-img";
  cardImg.src = url;
  cardImg.alt = name;
  let headingWrapper = document.createElement("div");
  headingWrapper.className = "heading-wrapper";
  let heading = document.createElement("h3");
  heading.className = "item-cards-name";
  heading.innerHTML = name;
  let description = document.createElement("p");
  description.className = "item-cards-desc";
  description.innerHTML = desc;
  headingWrapper.appendChild(heading);
  headingWrapper.appendChild(description);
  cardItem.appendChild(cardImg);
  cardItem.appendChild(headingWrapper);
  mainListWrapper.appendChild(cardItem);
};

var http = new XMLHttpRequest();
http.open("GET", "https://fortnite-api.theapinetwork.com/store/get", true);
http.onreadystatechange = function () {
  if (this.readyState === 4) {
    var response = JSON.parse(this.responseText);
    let dataArr = response.data;
    dataArr.map((items) => {
      console.log(items);
      createCardsDynamically(
        items.item.images.background,
        items.item.name,
        items.item.description
      );
    });
  }
};
http.send();

{
  /* <div class="item-cards">
<img src="https://dropin-bucket.mativecdn.com/cosmetics/br/cid_228_athena_commando_m_vampire/icon.png" alt="" class="item-cards-img">
<div class="heading-wrapper">
    <h3 class="item-cards-name">Name</h3>
    <p class="item-cards-desc">Description</p>
</div>
</div> */
}
