import {createRouter, createWebHashHistory} from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import ItemListContainer from '@/components/pages/ItemListContainer'
import ItemDetailContainer from '@/components/pages/ItemDetailContainer'
import CartPage from '@/components/pages/CartPage'

const routes = [
    {
        path: '/',
        component: ItemListContainer
    },
    {
        path: '/categorias/:id_category',
        component: ItemListContainer,
        props: (route) => {
            const {id_category} = route.params
            return {id_category}
        }
    },
    {
        path: '/producto/:id_product',
        component: ItemDetailContainer
    },
    {
        path: '/cart',
        component: CartPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
