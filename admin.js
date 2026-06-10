// ===== PAKSTOCK HUB - ADMIN PANEL JAVASCRIPT =====

// Default admin password (change it!)
let adminPassword = localStorage.getItem('pakstockAdminPassword') || 'pakstock2024';

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

// Check admin login
function checkAdmin() {
    const password = document.getElementById('adminPassword').value;
    if (password === adminPassword) {
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'block';
        loadAdminProducts();
    } else {
        document.getElementById('loginError').textContent = 'Incorrect password!';
    }
}

// Logout
function logout() {
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminDashboard').style.display = 'none';
    document.getElementById('adminPassword').value = '';
}

// Add new product
function addProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const image = document.getElementById('productImage').value;
    const desc = document.getElementById('productDesc').value;
    
    // Generate emoji based on image URL or use random emoji
    let emoji = '📦';
    if (image.includes('phone') || image.includes('mobile')) emoji = '📱';
    else if (image.includes('cloth')) emoji = '👕';
    else if (image.includes('s
