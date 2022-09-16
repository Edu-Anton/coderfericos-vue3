import {createRouter, createWebHashHistory} from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import ItemListContainer from '@/components/pages/ItemListContainer'
import ItemDetailContainer from '@/components/pages/ItemDetailContainer'

const routes = [
    {
        path: '/',
        component: ItemListContainer
    },
    {
        path: '/producto/:id_product',
        component: ItemDetailContainer
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
