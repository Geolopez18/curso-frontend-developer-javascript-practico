const menuEmail = document.querySelector('.navbar-email');
const menuIcon = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains
  ('inactive');

if (!isAsideClosed) {
  aside.classList.add('inactive');
}

  desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains
  ('inactive');

if (!isAsideClosed) {
  aside.classList.add('inactive');
}

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  //Carrito Mobile
  const isMobileMenuClosed = mobileMenu.classList.contains
  ('inactive');
  
if (!isMobileMenuClosed) {
  mobileMenu.classList.add('inactive');
}
//Carrito De Escritorio
const isDesktopMenuClosed = desktopMenu.classList.contains
  ('inactive');

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }


  aside.classList.toggle('inactive');
  
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 220,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Bike',
  price: 220,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Bike',
  price: 220,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});