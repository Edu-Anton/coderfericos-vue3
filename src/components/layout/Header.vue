<template>
  <header class="d-flex align-items-center text-light">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-3 d-flex align-items-center">
                <i class="bi bi-keyboard keyboard-icon fs-1"></i>
                <span class="fs-4 ps-2">Coderféricos</span>
            </div>
            <div class="col-md-6">
                <i class="bi bi-list border p-2 border-radius-round cursor-pointer me-2" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <span>Categorías</span>
            </div>
            <div class="col-md-3 text-end">
                <a href="/" class="text-decoration-none text-light">Inicio</a>
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
</style>