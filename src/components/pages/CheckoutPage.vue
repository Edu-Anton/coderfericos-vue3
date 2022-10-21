<template>
  <div class="row">
    <div class="col-8">
      <div class="card mb-4">
        <div class="card-body d-flex justify-content-between align-items-center">
            <span class="fs-4 fw-light text-secondary">Registro de Comprador</span>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="mb-3 row">
            <label htmlFor="inputPassword" class="col-sm-3 col-form-label">Nombre</label>
            <div class="col-sm-9">
              <Input 
                name="name" 
                class="form-control"
                value="Eduardo Calderón"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label htmlFor="inputPassword" class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <Input 
                name="email" 
                class="form-control"
                value="ed@gmail.com"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label htmlFor="inputPassword" class="col-sm-3 col-form-label">Teléfono</label>
            <div class="col-sm-9">
              <Input 
                name="phone" 
                class="form-control"
                value="999-666-333"
              />
            </div>
          </div>
          <div class="text-center mt-3">
            <!-- <button class="btn btn-danger py-3 px-5">
              Continuar con el pago <i class="bi bi-arrow-right"></i>
            </button> -->
            <router-link to="/order-received/kAdAxnL88Y89DVTDbKg2" class="btn btn-danger py-3 px-5">
              Continuar con el pago <i class="bi bi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h2 class="fs-4 fw-light text-secondary mb-4">Resumen de tu orden</h2>
          <div class="pb-2 d-flex justify-content-between">
              <span>Sub-Total</span>
              <span>$ {{ $store.state.totalAccount }}</span>
          </div>
          <div class="pb-2 d-flex justify-content-between">
              <span>Costo de envío</span>
              <span>$ 10</span>
          </div>
          <hr>
          <div class="pb-2 d-flex justify-content-between fw-bold">
              <span>Costo de envío</span>
              <span>$ {{ $store.state.totalAccount + 10 }}</span>
          </div>
          <router-link to="/cart" class="text-success">Ver detalle de mi compra</router-link>
          <div class="alert alert-success mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            <span class="ps-2">Su pedido llegará en 5 días a partir de la fecha de su compra.</span>
          </div>
          <div class="d-flex justify-content-between">
                    <div class="d-flex flex-column align-items-center c-benefits__content">
                        <i class="bi bi-lock fs-2 c-benefits__icon"></i>
                        <span class="text-center c-benefits__text">Pago <br/>Seguro</span>
                    </div>
                    <div class="d-flex flex-column align-items-center c-benefits__content">
                        <i class="bi bi-arrow-counterclockwise fs-2 c-benefits__icon"></i>
                        <span class="text-center c-benefits__text">Cambios y <br/>Devoluciones</span>
                    </div>
                    <div class="d-flex flex-column align-items-center c-benefits__content">
                        <i class="bi bi-emoji-smile fs-2 c-benefits__icon"></i>
                        <span class="text-center c-benefits__text">Miles de <br/>clientes felices</span>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>