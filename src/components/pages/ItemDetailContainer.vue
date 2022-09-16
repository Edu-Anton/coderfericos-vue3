<template>
  <div class="row">
    <div class="col-md-4">
      <div>
        <img class="img-fluid" src="@/assets/lg-img/impresora1x1-min.jpg" alt="">
      </div>
    </div>
    <div class="col-md-8">
      <div class="d-flex align-items-center justify-content-between">
        <h1 class="h2 fw-normal text-secondary">{{ product.title }}</h1>
        <div>
          <span class="text-secondary">(cod: 5twepW)</span>
          <i className="bi bi-share mx-3"></i>
        </div>
      </div>
      <p><span class="text-success fw-bold">Marca: </span> {{ product.brand }}</p>
      <h6><span class="badge bg-danger p-3 py-2 mt-2">20% Dsto</span></h6>
      <p class="fs-4 text-danger">$ {{ product.price }}</p>
      <hr>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non sint eveniet, distinctio laudantium nulla repudiandae nam, cupiditate, facilis beatae ipsam! Itaque molestiae possimus, voluptas delectus non quos mollitia esse?</p>
      <hr>
      <p class="font-monospace text-secondary">
        <i class="fs-5 bi bi-shield-check text-info me-2"></i> Un año de garantía
      </p>
      <p class="font-monospace text-secondary">
        <i class="fs-5 bi bi-arrow-repeat text-info me-2"></i> Política de devolución de 30 días
      </p>
      <p class="font-monospace text-secondary">
        <i class="fs-5 bi bi-truck text-info me-2"></i> Envío a domicilio
      </p>
      <span class="fw-bold text-success">Disponible: </span><span> {{ product.stock }} unidades</span>
      <hr>
      <div class="d-flex align-items-center">
        <ItemCount></ItemCount>
        <button class="btn btn-danger btn-lg ms-4">Añadir al carrito</button>
      </div>
      <hr>

    </div>
  </div>
</template>

<script>
import ItemCount from '../ItemCount.vue'
import { doc, getDoc } from "firebase/firestore";
import {db} from '@/services/FirestoreDb'

export default {
  name: 'ItemDetailContainer',
  components: {
    ItemCount
  },
  data () {
    return {
      product: {}
    }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    async getProduct () {
      const id = '5TwepWyQ2YTttq73ZLLm'
      const docRef = doc(db, "products", id)
      const docSnap = await getDoc(docRef)
      this.product = {...docSnap.data()}      
    }
  }
}
</script>

<style>

</style>