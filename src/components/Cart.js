import Swal from 'sweetalert2';

const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];

export const addToCart = (course) => {
  const cart = getCart();
  if (cart.some(item => item.id === course.id)) {
    Swal.fire({
      icon: 'info',
      title: 'Producto ya en el carrito',
      text: 'Este curso ya está en tu carrito',
      timer: 2000,
      showConfirmButton: false
    });
    return;
  }
  cart.push(course);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  Swal.fire({
    icon: 'success',
    title: 'Producto agregado',
    text: 'El curso se ha agregado al carrito',
    timer: 2000,
    showConfirmButton: false
  });
};

export const removeFromCart = (id) => {
  const cart = getCart();
  const updatedCart = cart.filter(course => course.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  renderCart();
  Swal.fire({
    icon: 'success',
    title: 'Producto eliminado',
    text: 'El curso se ha eliminado del carrito',
    timer: 2000,
    showConfirmButton: false
  });
};


export const clearCart = () => {
  const cart = getCart();
  if (cart.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'Carrito',
      text: 'No hay cursos en el carrito',
      timer: 2000,
      showConfirmButton: false
    });
  } else {
    localStorage.removeItem('cart');
    renderCart();
    Swal.fire({
      icon: 'success',
      title: 'Carrito vaciado',
      text: 'Se han eliminado todos los cursos del carrito',
      timer: 2000,
      showConfirmButton: false
    });
  }
};



export const renderCart = () => {
  const cart = getCart();
  const cartTable = document.querySelector("#lista-carrito tbody");
  cartTable.innerHTML = cart.map(course => `
    <tr>
      <td><img src="${course.img}" width="50" class="img-fluid rounded" /></td>
      <td>${course.title}</td>
      <td>$${course.price.toFixed(2)}</td>
      <td><button class="btn btn-danger btn-sm remove" data-id="${course.id}">delete<i class="bi bi-trash"></i></button></td>
    </tr>
  `).join('');
  
  cartTable.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      removeFromCart(parseInt(button.dataset.id));
    });
  });

  const totalPrice = cart.reduce((total, course) => total + course.price, 0);
  document.querySelector('#cart-total').textContent = `Total: $${totalPrice.toFixed(2)}`;

  const clearCartButton = document.querySelector('#clear-cart');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
  }
};

