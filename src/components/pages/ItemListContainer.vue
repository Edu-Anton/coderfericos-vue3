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
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '@/services/FirestoreDb'

export default {
    name: 'ItemListContainer', 
    components: {
        ListItemCard
    },
    props: ['id_category'],
    data () {
        return {
            products: [],
            brands: [],
        }
    },
    watch: {
        id_category() {
            this.getProducts ()
        }
    },
    mounted () {
        this.getProducts ()       
    },
    methods: {
        async getProducts () {
            // await this.getAllProducts()
            this.products = []
            this.brands = []
            if (this.id_category) {
                await this.getProductsByCategory()
            } else {
                await this.getAllProducts()
            }
        },
        async getAllProducts () {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.docs.map( doc => {
                const data = doc.data()
                this.products.push({...data, id: doc.id})
                this.brands.push(data.brand)
            })
        },
        async getProductsByCategory () {
            const { id_category } = this.$route.params
            const q = query(collection(db, "products"), where("category_id", "==", Number(id_category)))
            const querySnapshot = await getDocs(q);
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