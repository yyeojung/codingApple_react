import { configureStore, createSlice } from '@reduxjs/toolkit';
import  user  from './store/userSlice';



let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
})

let cartSlice = createSlice({
    name: 'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ] ,
    reducers: {
        countUp(state, action) {
            const index = state.findIndex((a) => {return a.id === action.payload})
            state[index].count++;
        },
        order(state, action) {
            const index = state.findIndex((a) => {return a.id === action.payload.id})
            if(index === -1){
                state.push(action.payload);
            } else {
                state[index].count++;
            }
        },
        deleteItem(state, action) {
            const index = state.findIndex((a) => {return a.id === action.payload})
            state.splice(index, 1);
        }
    }
})
export const {countUp, order, deleteItem} = cartSlice.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cartSlice: cartSlice.reducer,
    }
}) 