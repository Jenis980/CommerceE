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
    const userLoginBtn = document.getElementById('user-login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // Check login status
    if (localStorage.getItem('user')) {
        // User is logged in
        userLoginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        // User is not logged in
        userLoginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
});

function logout() {
    localStorage.removeItem('user'); // Clear user data
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to login page
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

    // Check if the user is logged in
function isLoggedIn() {
    return localStorage.getItem('user') !== null; // Returns true if user data is stored
}

// Handle Add to Cart button
function handleAddToCart(productId) {
    if (!isLoggedIn()) {
        // Redirect to login page if user is not logged in
        alert('You need to log in to add items to the cart.');
        window.location.href = 'login.html';
        return;
    }
    alert(`Product ${productId} added to cart!`);
}

// Handle Shop Now button
function handleShopNow() {
    if (!isLoggedIn()) {
        alert('Please log in to start shopping.');
        window.location.href = 'login.html';
        return;
    }
    // Redirect or scroll to products section if logged in
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to "Shop Now" button
    document.querySelector('.btn-primary').addEventListener('click', handleShopNow);

    // Add event listeners to all Add to Cart buttons
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id'); // Get product ID
            handleAddToCart(productId);
        });
    });
});

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
    document.addEventListener('DOMContentLoaded', () => {
        // Existing DOMContentLoaded code...
    
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', handleAddToCart);
        });
    });
});
