import { createStore } from 'vuex'

export default createStore({

    state: {
        totalQuantity: 0,
        totalAccount: 0,
        cartList: [],
        orderReceived: {}
    },

    mutations: {
        getTotalAccount (state) {
            state.totalAccount = state.cartList.reduce((acum, product) => (acum + product.price*product.quantity), 0);
        },
        addItemToCart ( state, addedProduct ) {
            if (isItemInCart(state.cartList, addedProduct.id)) {
                const index = state.cartList.findIndex(item => item.id == addedProduct.id)
                state.cartList[index].quantity += addedProduct.quantity  
                state.totalQuantity += addedProduct.quantity               
            } else {
                state.cartList.push(addedProduct)
                state.totalQuantity += addedProduct.quantity
            }
        },
        removeItemFromCart (state, {id, quantity}) {
            state.cartList = [...state.cartList.filter(item => item.id !== id)]
            state.totalQuantity -= quantity
        },
        resetCart (state) {
            state.cartList = []
            state.totalQuantity = 0
            state.totalAccount = 0
        },
        addOneToItem (state, id) {
            const index = state.cartList.findIndex(item => item.id == id)
            state.cartList[index].quantity ++  
            state.totalQuantity ++
        },
        subtractOneToItem (state, id) {
            const index = state.cartList.findIndex(item => item.id == id)
            const item = state.cartList[index]
            if (item.quantity > 1 ) {
                state.cartList[index].quantity --  
                state.totalQuantity --
            } else {
                alert('Debe  seleccionar al menos un producto.')
            }
        },
        // getOrderReceived (state, order) {

        // }
    }
})

const isItemInCart = (items, idProduct) => {
    return items.some(item => item.id == idProduct)
}