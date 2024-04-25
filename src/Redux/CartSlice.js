import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {},
    totalQuantity: 0,
    subtotal: 0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            if (state.items[item.id]) {
                state.items[item.id].quantity += 1;
            } else {
                state.items[item.id] = { ...item, quantity: 1 };
            }
            state.totalQuantity += 1;
            state.subtotal += item.price;
        },
        removeItem(state, action) {
            const id = action.payload;
            if (state.items[id].quantity > 1) {
                state.items[id].quantity -= 1;
                state.subtotal -= state.items[id].price;
            } else {
                state.subtotal -= state.items[id].price;
                delete state.items[id];
            }
            state.totalQuantity -= 1;
        },
    },
});

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
