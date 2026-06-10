// ===== PAKSTOCK HUB - MAIN WEBSITE JAVASCRIPT =====

// Product data stored locally (you can change from admin panel)
let products = JSON.parse(localStorage.getItem('pakstockProducts')) || [
    {
        id: 1,
        name: "Sample Product 1",
        price: 1200,
        description: "Quality wholesale product available in dozens",
        emoji: "📦"
    },
    {
        id: 2,
        name: "Sample Product 2",
        price: 2500,
        description: "Premium quality wholesale item",
        emoji: "🛍️"
    },
    {
        id: 3,
        name: "Sample Product 3",
        price: 1800,
        description: "Best selling wholesale product",
        emoji: "📱"
    }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', loadProducts);

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">PKR ${product.price} <span>/ dozen</span></p>
                <a href="https://wa.me/923325296025?text=Hello%20PAKSTOCK%20HUB,%20I%20want%20to%20order%20${product.name}" 
                   class="btn btn-small" target="_blank">
                    Order Now
                </a>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}
