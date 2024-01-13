let bagItemsObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
}

function loadBagItemObjects() {
  bagItemsObjects =  bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  }); 
}

function displayBagItems() {
  let containerElement = document.querySelector(".bag-items-container");

  let innerHtml = '';
 
  bagItemsObjects.forEach(bagItem => {
    innerHtml += generateItemHTML(bagItem);
  });
    containerElement.innerHTML = innerHtml;
}

function removeFromBag(itemId){
  bagItems=bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
}

function generateItemHTML(item) {
  return `<div class="bag-item-container">
      <div class="item-left-part">
          <img class="bag-item-img" src="../${item.image}">
      </div>
      <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
      <span class="current-price">Rs${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
      <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
      </div>

      <div class="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
      </div>

  `
}
