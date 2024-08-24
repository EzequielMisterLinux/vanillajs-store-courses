import { courses } from '../data/courses';
import { addToCart } from './Cart';

export const initMain = () => {
  const main = document.createElement('main');
  main.className = 'container py-5';
  main.innerHTML = `
    <h2 class="text-center mb-4 fw-bold fst-italic">Próximos Cursos</h2>
    <div class="text-center mb-5">
      <img src="/assets/img/separador.png" alt="separador" class="img-fluid">
    </div>
    <div class="row g-4">
      ${courses.map(course => `
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="${course.img}" class="card-img-top" alt="${course.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${course.title}</h5>
              <p class="card-text flex-grow-1">${course.description}</p>
              <p class="precio fw-bold fs-5 mb-3">$${course.price.toFixed(2)}</p>
              <button class="btn btn-primary add-to-cart" data-id="${course.id}">
                <i class="bi bi-bag-plus-fill me-2"></i>Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  document.body.appendChild(main);

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const courseId = parseInt(button.dataset.id);
      const course = courses.find(course => course.id === courseId);
      addToCart(course);
    });
  });
};
