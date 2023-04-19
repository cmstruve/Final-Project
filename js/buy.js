const cart = [];
let totalCost = 0;


const addToCart = (item, price) => {
  cart.push({ item, price });
};


const updateCart = () => {
    const cartItems = document.querySelector('.cartItems');
    const totalCostDisplay = document.querySelector('.totalCost');
    const cartList = document.createElement('ul');
    
    // Calculate the total price
    let totalPrice = 0;
    cart.forEach(item => totalPrice += item.price);
    
    // Update the cart list and total price display
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerText = `${item.item} - $${item.price.toFixed(2)}`;
      cartList.appendChild(li);
    });
    
    // Clear the current cart list
    const oldCartList = document.querySelector('.cart ul');
    if (oldCartList) {
      oldCartList.remove();
    }
    
    cartItems.innerText = `Cart Items: ${cart.length}`;
    totalCostDisplay.innerText = `Total cost: $${totalPrice.toFixed(2)}`;
    totalCost = totalPrice;
    
    // Append the new cart list to the container
    document.querySelector('.list').appendChild(cartList);
  };


const emptyCartButton = document.getElementById('emptyCart');

emptyCartButton.addEventListener('click', () => {
    cart.length = 0;
    totalCost = 0;
    updateCart();
});
  

const purchaseButton = document.getElementById('purchase');

purchaseButton.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Thank you for your purchase!');
    cart.length = 0;
    totalCost = 0;
    updateCart();
  }
});


  // Add event listeners to all "Add to cart" buttons
  const buttons = document.getElementsByClassName('my-button');
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
      const item = button.id;
      const price = parseFloat(button.dataset.price);
      addToCart(item, price);
      updateCart();
    });
  });