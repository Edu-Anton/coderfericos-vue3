<template>
    <div class="col-md-4">
        <router-link to="`/producto/${producto.id}`">
            <div class="card card-shadow mt-4">
                <div class="ratio ratio-4x3">
                    <!-- <img src="data:image/gif;base64,@/assets/small-img/monitor.jpg" class="card-img-top rounded-3 imagen" alt="Imagen de Producto"> -->
                    <img :src="require(`../assets/small-img/${producto.pictureUrl}.jpg`)" class="card-img-top rounded-3 imagen" alt="Imagen de Producto"/>
                    <!-- <img src="../assets/small-img/auriculares.jpg" class="card-img-top rounded-3 imagen" alt="Imagen de Producto"/> -->
                </div>
                <div class="card-body">
                    <div class="card-title-height">
                        <p class="fw-bold text-success card-product-title">{{producto.title}}</p>
                    </div>
                    <p class="text-primary fv-small-caps">{{producto.brand}}</p>
                    <div class="card-description-height">
                        <p class="fs-6">{{producto.description}}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span class="fw-bold">$ {{producto.price}}</span>
                        <span class="badge rounded-pill bg-secondary">Id: {{producto.id.substring(0,2)}}</span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ListItemCard',
    props: ['producto'],
    // computed: {
    //     imgSrc () {
    //         return `../assets/small-img/${this.producto.pictureUrl}.jpg`
    //     }
    // }

}
</script>

<style>

</style>