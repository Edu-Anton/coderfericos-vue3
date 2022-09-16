<template>
  <div class="row">
    <div class="col-md-3">
        <p class="fs-5 fw-bold text-success">Todos los productos</p>
        <ul class="list-group list-group-flush">
            <li v-for="(brand, index) in filteredBrands" class="list-group-item" :key="index">
            <div class="text-secondary fv-small-caps cursor-pointer">{{brand}}</div>
            </li>
        </ul>
    </div>
    <div class="col-md-9">
        <div class="row">
            <ListItemCard v-for="(product, index) in products" :key="index" :producto="product"></ListItemCard>
        </div>
    </div>
  </div>
</template>

<script>
import ListItemCard from '@/components/ListItemCard';
import { collection, getDocs } from "firebase/firestore";
import {db} from '@/services/FirestoreDb'

export default {
    name: 'ItemListContainer', 
    components: {
        ListItemCard
    },
    data () {
        return {
            products: [],
            brands: []
        }
    },
    mounted () {
        this.getProducts ()       
    }, 
    methods: {
        async getProducts () {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.docs.map( doc => {
                const data = doc.data()
                this.products.push({...data, id: doc.id})
                this.brands.push(data.brand)
            })
        }
    },
    computed: {
        filteredBrands () {
            const setBrands =  new Set(this.brands)
            return Array.from(setBrands)
        }
    }
}
</script>

<style>

</style>