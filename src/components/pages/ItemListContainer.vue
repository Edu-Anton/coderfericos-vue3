<template>
  <div class="row">
    <div class="col-md-3">
        Menu lateral
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="ratio ratio-4x3">
                        <img src="@/assets/small-img/monitor.jpg" class="card-img-top rounded-3 imagen" alt="Imagen de Producto">
                    </div>
                    <div class="card-body">
                        <div class="card-title-height">
                            <p class="text-dark card-product-title">Impresora Multifuncional HP</p>
                        </div>
                        <p class="text-primary fv-small-caps">HP</p>
                        <div class="card-description-height">
                            <p>Quis autem vel eum iure qui in ea voluptate.</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold">$ 150</span>
                            <span class="badge rounded-pill bg-primary">Id: 5T</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat esse quaerat amet fugit officia, nemo excepturi harum sequi culpa nobis iusto laboriosam dolore placeat provident atque dicta nostrum ipsa sunt?
                    </div>
                </div>
            </div>
            <ListItemCard></ListItemCard>
        </div>
    </div>
  </div>
</template>

<script>
import ListItemCard from '@/components/ListItemCard';

export default {
    name: 'ItemListContainer', 
    components: {
        ListItemCard
    },
    data () {
        return {
            products: null
        }
    },
    methods: {
        getProducts () {
            console.log('productos');
        }
    }
}
</script>

<style>

</style>