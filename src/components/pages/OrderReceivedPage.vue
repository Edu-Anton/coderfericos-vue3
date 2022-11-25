<template>
  <div v-if="isLoading" class="row">
    <div class="col-md-12">
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="col-8 offset-2">
      <p class="fs-2 fw-lght mb-5 text-success">¡Gracias! Tu orden ha sido recibida</p>
      <ul class="list-group">   
        <li class="list-group-item bg-grey">
            <p class="mb-1 order__label text-success fw-bold">ID ORDEN</p>
            <p class="mb-0 order__info">{{ order.id }}</p>
        </li>
        <li class="list-group-item bg-grey">
            <p class="mb-1 order__label text-success fw-bold">CLIENTE</p>
            <p class="mb-0 order__info">{{ order.buyer.name }}</p>
        </li>
        <li class="list-group-item bg-grey">
            <p class="mb-1 order__label text-success fw-bold">EMAIL</p>
            <p class="mb-0 order__info">{{ order.buyer.email }}</p>
        </li>
        <li class="list-group-item bg-grey">
            <p class="mb-1 order__label text-success fw-bold">MÉTODO DE PAGO</p>
            <p class="mb-0 order__info">Tarjeta Visa 4343-xxxx-xxxx-2323</p>
        </li>
        <li class="list-group-item bg-grey">
            <p class="mb-1 order__label text-success fw-bold">MONTO DE COMPRA</p>
            <p class="mb-0 order__info">USD ${{ totalAccount }} </p>
        </li>
      </ul>
      <h2 class="fs-4 text-success fw-light mt-5">Detalle de la Orden</h2>
        <table class="table table-borderLess mt-4">
            <thead>
                <tr>
                    <th class="text-success">Producto</th>
                    <th class="text-success">Marca</th>
                    <th class="text-success">Cantidad</th>
                    <th class="text-success text-end">Precio Unitario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in order.items" :key="index">
                    <td class="py-3">{{ item.title }}</td>
                    <td class="py-3">{{ item.brand }}</td>
                    <td class="py-3">{{ item.quantity }}</td>
                    <td class="py-3 text-end">${{ item.price*item.quantity }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td class="py-3" colSpan="3">Costo de Envío</td>
                    <td class="py-3 text-end">$ 10</td>
                </tr>
            </tfoot>
        </table> 

  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import {db} from '@/services/FirestoreDb'
import { mapState } from 'vuex';

export default {
    data() {
        return {
            order: {},
            isLoading: true
        }
    },
    mounted() {
        this.getOrder()
    },
    methods: {
        async getOrder() {
            const { id_order } = this.$route.params
            const docRef = doc(db, "orders", id_order)
            const docSnap = await getDoc(docRef)
            this.order = {...docSnap.data(), id:id_order}
            this.isLoading = false
            console.log(this.order)
        }
    },
    computed: {
        ...mapState(['totalAccount'])
    }
}
</script>

<style>

</style>