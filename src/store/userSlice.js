import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
    name: 'user',
    initialState: {name: '홍', age: 20},
    reducers: {
        changeName(state) {
            state.name = '홍시'
        },
        plusAge(state, action) {
            state.age += action.payload
        }
    }
})
export const {changeName, plusAge} = user.actions;

export default user