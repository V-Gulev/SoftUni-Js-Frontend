document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let products = new Set();
   let totalPrice = 0;

   const allAddButtons = document.querySelectorAll('.add-product');
   const resultTextArea = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');

   for (const button of allAddButtons) {
      button.addEventListener('click', handleAddPorduct);
   }

   checkoutButton.addEventListener('click', handleCheckout);


   function handleAddPorduct(e) {
      const fullProduct = e.target.parentElement.parentElement;
      const productTitle = fullProduct.querySelector('.product-title').textContent;
      products.add(productTitle);
      const productPrice = fullProduct.querySelector('.product-line-price').textContent;
      totalPrice +=  Number(productPrice);

      resultTextArea.value += `Added ${productTitle} for ${Number(productPrice).toFixed(2)} to the cart.\n`;
   }

   function handleCheckout() {
      resultTextArea.value += `You bought ${[...products].join(', ')} for ${totalPrice.toFixed(2)}.\n`;

      checkoutButton.disabled = true;
      allAddButtons.forEach(button => button.disabled = true);
   }
}
