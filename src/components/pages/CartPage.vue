<template>
  <div class="row">
    <div class="col-8">
        <div class="card mb-4">
            <div class="card-body d-flex justify-content-between align-items-center">
                <span class="fs-4 fw-light text-secondary">Bolsa de compra (1 producto)</span>
                <button class="btn btn-outline-danger btn-sm" @click="resetCart">Limpiar Carrito</button>
            </div>
        </div>

        <div v-for="(product, index) in cartList" :key="index"  class="card mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-2">
                        <!-- <img src="../../assets/lg-img/impresora1x1-min.jpg" class="img-fluid" alt=""> -->
                        <img :src="require(`../../assets/lg-img/${product.pictureUrl}1x1-min.jpg`)" class="img-fluid" alt="">
                    </div>
                    <div class="col-4">
                        <h2 class="fs-6 mb-1 text-success">{{ product.title.toUpperCase() }}</h2>
                        <span class="d-block mb-3">Código: 5twe</span>
                        <span class="text-decoration-underline co-fs-7 co-cursor-pointer" @click="removeItemFromCart(product.id, product.quantity)">Eliminar</span>
                    </div>
                    <div class="col-3 d-flex flex-column justify-content-between">
                        <p class="fs-5 text-danger">${{ product.price }} (Oferta)</p>
                        <span class="co-fs-7">
                            <i className="bi bi-truck fs-6 me-1 text-success"></i>
                            Despacho a domicilio
                        </span>
                    </div>
                    <div class="col-3 d-flex flex-column justify-content-between align-items-end">
                        <ItemCount 
                            :counter="product.quantity"
                            @addCounter="addCounter"
                        />
                        <span class="text-success fw-bold co-fs-7">Disponible</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-2">
                        <img src="../../assets/lg-img/auriculares1x1-min.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-4">
                        <h2 class="fs-6 mb-1 text-success">IMPRESORA MULTIFUNCIONAL HP</h2>
                        <span class="d-block mb-3">Código: 5twe</span>
                        <span class="text-decoration-underline co-fs-7 co-cursor-pointer">Eliminar</span>
                    </div>
                    <div class="col-3 d-flex flex-column justify-content-between">
                        <p class="fs-5 text-danger">$150 (Oferta)</p>
                        <span class="co-fs-7">
                            <i className="bi bi-truck fs-6 me-1 text-success"></i>
                            Despacho a domicilio
                        </span>
                    </div>
                    <div class="col-3 d-flex flex-column justify-content-between align-items-end">
                        <ItemCount></ItemCount>
                        <span class="text-success fw-bold co-fs-7">Disponible</span>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
    <div class="col-4">
        <div class="card">
            <div class="card-body">
                <h2 class="fs-4 fw-light text-secondary mt-2">Resumen de su orden</h2>
                <div class="pt-4 pb-3 d-flex justify-content-between">
                    <span>Sub-total productos</span>
                    <span>$ 150</span>
                </div>
                <div class="pb-2 d-flex justify-content-between">
                    <span>Costo de envío</span>
                    <span>$ 10</span>
                </div>
                <hr>
                <div class="py-2 d-flex justify-content-between fw-bold text-secondary">
                    <span>Precio Total</span>
                    <span>$ 160</span>
                </div>
                <div class="d-grid gap-2 mt-3 mb-3">
                    <button class="btn btn-danger btn-lg btn-block mb-3 fs-6 d-block p-3 rounded-1">Confirmar mi compra</button>
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
import ItemCount from '../ItemCount.vue';
export default {
    components: {
        ItemCount
    },
    data () {
        return {
            cartList: []
        }
    },
    // computed: {
    //     cartList () {
    //         return this.$store.state.cartList
    //     }
    // },
    mounted () {
        this.getItemsInCart()
    },
    methods: {
        getItemsInCart () {
            // this.cartList.push([...this.$store.state.cartList])
            this.cartList = [...this.$store.state.cartList]
        },
        removeItemFromCart (id, quantity) {
            this.$store.commit('removeItemFromCart', {id, quantity})
            this.getItemsInCart()
        },
        resetCart () {
            this.$store.commit('resetCart'),
            this.getItemsInCart()
        }
    }
}
</script>

<style>
    .c-benefits__content {
        width: 33%;
    }

    .c-benefits__icon {
        color: #777;
    }

    .c-benefits__text {
        font-size: .75rem;
    }
</style>