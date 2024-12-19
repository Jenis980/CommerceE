function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function checkIfAdmin(email, password) {
    return email === 'admin@example.com' && password === 'admin123';
}

function handleAddToCart() {
    if (!localStorage.getItem('user')) {
        showModal('signin-modal');
    } else {
        alert('Product added to cart!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Open modals
    document.getElementById('user-login-btn').addEventListener('click', () => showModal('signin-modal'));
    document.getElementById('show-signup').addEventListener('click', () => {
        closeModal('signin-modal');
        showModal('signup-modal');
    });
    document.getElementById('show-signin').addEventListener('click', () => {
        closeModal('signup-modal');
        showModal('signin-modal');
    });

    // Close modals
    document.getElementById('signin-close').addEventListener('click', () => closeModal('signin-modal'));
    document.getElementById('signup-close').addEventListener('click', () => closeModal('signup-modal'));

    // Add to cart button
    document.getElementById('add-to-cart-btn').addEventListener('click', handleAddToCart);

    // Sign In form
    document.getElementById('signin-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        if (checkIfAdmin(email, password)) {
            window.location.href = 'admin_dashboard.html';
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.email === email && user.password === password) {
                alert('Login Successful!');
                closeModal('signin-modal');
            } else {
                alert('Invalid credentials!');
            }
        }
    });

    // Sign Up form
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Account created! Please log in.');
        closeModal('signup-modal');
        showModal('signin-modal');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('products');

    // Example product list
    const products = [
        { id: 1, name: 'Product 1', price: 100, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 200, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 300, image: 'product3.jpg' },
        { id: 4, name: 'Product 4', price: 400, image: 'product4.jpg' },
    ];

    // Render products
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p><strong>Rs${product.price}</strong></p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
    document.querySelector('.btn-primary').addEventListener('click', (e) => {
        e.preventDefault();
        const productsSection = document.getElementById('products-section');
        productsSection.scrollIntoView({ behavior: 'smooth' });
    });
    
});
