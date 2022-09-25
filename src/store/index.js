import { createStore } from 'vuex'

export default createStore({

    state: {
        totalQuantity: 0,
        cartList: []
    },

    mutations: {
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
        }
    }
})

const isItemInCart = (items, idProduct) => {
    return items.some(item => item.id == idProduct)
}