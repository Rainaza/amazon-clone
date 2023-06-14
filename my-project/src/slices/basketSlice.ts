
import { Products } from "@/types/types"
import {PayloadAction, createSlice} from "@reduxjs/toolkit"

interface productsState {
    products:Products[]
}
interface basketState{
    basket:{
        products:Products[]
    }
}

const initialState:productsState = {
    products: [],
}
export const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addToBasket:(state,action:PayloadAction<Products>)=>{
            state.products=[...state.products,action.payload]
        },
        removeFromBasket: (state,action)=>{},
    },
})
export const {addToBasket,removeFromBasket} = basketSlice.actions

export const selectItems = (state:basketState) => state.basket.products;

export default basketSlice.reducer