// Toggle class active Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// Menghilangkan Nav bar di klik di luar nav
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
document.querySelector('.item-detail-button').onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
};



const itemDetailModal2 = document.querySelector('#item-detail-modal-2');
document.querySelector('.item-detail-button-2').onclick = (e) => {
    itemDetailModal2.style.display = 'flex';
    e.preventDefault();
};



const itemDetailModal3 = document.querySelector('#item-detail-modal-3');
document.querySelector('.item-detail-button-3').onclick = (e) => {
    itemDetailModal3.style.display = 'flex';
    e.preventDefault();
};



const itemDetailModal4 = document.querySelector('#item-detail-modal-4');
document.querySelector('.item-detail-button-4').onclick = (e) => {
    itemDetailModal4.style.display = 'flex';
    e.preventDefault();
};
})



// Klik Tombol Close Mode
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

window.onclick = (e) => {
    if (e.target === itemDetaiModal) {
        itemDetaiModal.style.display = 'none';
    }
}