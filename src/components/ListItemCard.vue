<template>
    <div class="col-md-4">
        <div class="card">
            <div class="ratio ratio-4x3">
                <img src="@/assets/small-img/monitor.jpg" class="card-img-top rounded-3 imagen" alt="Imagen de Producto">
            </div>
            <div class="card-body">
                <div class="card-title-height">
                    <p class="text-dark card-product-title">{product.tile}</p>
                </div>
                <p class="text-primary fv-small-caps">{product.brand}</p>
                <div class="card-description-height">
                    <p>{product.description}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="fw-bold">$ {product.price}</span>
                    <span class="badge rounded-pill bg-primary">Id: 5T</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItemCard',
    props: [product]
}
</script>

<style>

</style>