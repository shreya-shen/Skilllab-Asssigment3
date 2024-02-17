// Get all buy buttons
const buyButtons = document.querySelectorAll('.product-card button');

// Loop through each buy button
buyButtons.forEach(button => {
    // Add click event listener to each button
    button.addEventListener('click', function() {
        // Get the product card of the clicked button
        const productCard = this.parentElement.parentElement;

        // Check if the product card contains quantity elements
        if (!productCard.querySelector('.quantity-container')) {
            // Create quantity container
            const quantityContainer = document.createElement('div');
            quantityContainer.classList.add('quantity-container');

            // Create decrement button
            const decrementButton = document.createElement('button');
            decrementButton.textContent = '-';
            decrementButton.addEventListener('click', function() {
                const quantityInput = quantityContainer.querySelector('input');
                let quantity = parseInt(quantityInput.value);
                if (quantity > 1) {
                    quantity--;
                    quantityInput.value = quantity;
                }
            });
            quantityContainer.appendChild(decrementButton);

            // Create quantity input
            const quantityInput = document.createElement('input');
            quantityInput.type = 'text';
            quantityInput.value = '1';
            quantityInput.addEventListener('change', function() {
                let quantity = parseInt(this.value);
                if (isNaN(quantity) || quantity < 1) {
                    this.value = '1';
                }
            });
            quantityContainer.appendChild(quantityInput);

            // Create increment button
            const incrementButton = document.createElement('button');
            incrementButton.textContent = '+';
            incrementButton.addEventListener('click', function() {
                const quantityInput = quantityContainer.querySelector('input');
                let quantity = parseInt(quantityInput.value);
                quantity++;
                quantityInput.value = quantity;
            });
            quantityContainer.appendChild(incrementButton);

            // Append quantity container to product card
            productCard.querySelector('#product-details').appendChild(quantityContainer);
            
            // Change button text to 'Add to Cart'
            this.textContent = 'Add to Cart';
        }
    });
});
