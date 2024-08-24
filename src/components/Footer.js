export const initFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <footer class="mt-5 py-3 bg-light">
        <div class="container d-flex justify-content-between align-items-center">
          <section>
            <p class="mb-0">&copy; ${new Date().getFullYear()} Escuela de Cocina</p>
          </section>
          <section>
            <h2 class="h5 fw-light mb-0">Todos los derechos reservados</h2>
          </section>
        </div>
      </footer>
    `;
    document.body.appendChild(footer);
  };
  