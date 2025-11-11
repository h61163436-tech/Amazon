// Cart functionality
const addButtons = document.querySelectorAll('.add-cart');
const cartCount = document.getElementById('cartCount');
let count = 0;

addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    alert('Item added to cart!');
  });
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    alert(`Searching for "${query}"...`);
  } else {
    alert('Please enter a product name.');
  }
});
