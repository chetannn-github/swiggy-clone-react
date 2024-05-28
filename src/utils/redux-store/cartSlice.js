import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItems: (state,action) =>{
            state.items.push(action.payload);
        },
        clearCart : (state, action) =>{
            state.items.length = 0 ; // correct way because you have to always modify your state  THATS WHY STATE = [ ] WONT WORK KUKI TUMNE REFERENCE CHANGE KIYA HH ONLY


            //VANILLA REDUX older way of writing code of redux me tumhe state modify nii krrrnii hoti hh   && returning was must // kese krte the frrr  new state create krte the then usko mutate krke return kraa krte the 
            // example const newState = [...state ];   newState.items.push(action.payload); return newState; 


            // NEW WAY RDK  --  EITHER WE HAVE TO MUTATE THE STATE OR RETURN NEW STATE   ........IT USES 
            // FOR CLEAR CART EITHER state.items.length = 0 ; OR RETURN []
        }
    }
});
export const {addItems,clearCart } = cartSlice.actions;
export default cartSlice.reducer;

