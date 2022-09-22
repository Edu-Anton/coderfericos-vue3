<template>
  <header class="d-flex align-items-center text-light">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-3 d-flex align-items-center">
              <router-link to="/" class="d-flex align-items-center text-light text-decoration-none">
                <i class="bi bi-keyboard keyboard-icon fs-1"></i>
                <span class="fs-4 ps-2">Coderféricos</span>
              </router-link>
            </div>
            <!-- <div class="col-md-6">
                <i class="bi bi-list border p-2 border-radius-round cursor-pointer me-2" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <span>Categorías</span>
            </div> -->
            <div class="col-6 d-flex align-items-center">
              <div class="dropdown">
                <i class="bi bi-list border p-2 border-radius-round cursor-pointer" data-bs-toggle="dropdown"></i>
                <span class="ms-2">Categorías</span>
                <ul class="dropdown-menu mt-2" aria-labelledby="dropdownMenu2">
                  <li>
                    <router-link to="/categorias/1" class="nav-link" activeClassName="selected">
                      <i class="bi bi-tv me-2"></i>
                      Periféricos
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/categorias/2" class="nav-link" activeClassName="selected">
                      <i class="bi bi-sd-card me-2"></i> 
                      Almacenamiento
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/categorias/3" class="nav-link" activeClassName="selected">
                      <i class="bi bi-speaker me-2"></i>
                      Audio y Sonido
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/categorias/4" class="nav-link" activeClassName="selected">
                      <i class="bi bi-camera-video me-2"></i>
                      Video
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 text-end">
                <router-link to="/" class="text-decoration-none text-light">Inicio</router-link>
                <router-link to="/cart">
                  <span class="d-inline-block rounded-circle bg-light px-2 py-1 ms-3 position-relative">
                    <i className="bi bi-cart3 text-dark"></i>
                    <span className="badge rounded-pill bg-danger fw-bold d-inline-block position-absolute top-0 start-100 translate-middle">
                      5<!-- {quantityInCart} -->
                    </span>
                  </span>
                </router-link>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'HeaderSection'
}
</script>

<style>
  header {
      background-color: #8fca00;
      height: 70px;
  }  
  .nav-link {
    color: #555;
    font-family: 'Poppins', sans-serif;
    font-size: .9rem;
    padding: 0.5rem 1rem;
  }
  .nav-link:hover {
    color: #333;
    background-color: #eee;
  }
  .dropdown-menu {
    min-width: 12rem;
  }
</style>