import Swal from 'sweetalert2';
import { renderCart, clearCart } from './Cart';

export const initHeader = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <img src="/assets/img/logo.svg" alt="logo escuela cocina" class="img-fluid logo" style="max-height: 50px;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-house-fill"></i> Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-cart-check-fill"></i> Carrito
              </a>
              <div class="dropdown-menu dropdown-menu-end p-3" id="carrito" style="min-width: 300px;">
                <table class="table table-sm table-hover" id="lista-carrito">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Clase</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <p id="cart-total" class="fw-bold text-end"></p>
                <button id="vaciar-carrito" class="btn btn-danger btn-sm w-100">Vaciar Carrito</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
  document.body.appendChild(header);

  document.querySelector('#vaciar-carrito').addEventListener('click', () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se eliminarán todos los cursos del carrito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
      }
    });
  });


  renderCart();
};