import { Action, createReducer, on } from '@ngrx/store';
import { AddToCart, CartState, DeleteItem, } from './cart-action';

export const initState: CartState = {
    allItems: []
}

export const CartReducer = createReducer(
    initState,
    on(AddToCart, (state, action: any) => {
        return { ...state, allItems: [...state.allItems, action.item] };
    }),
    on(DeleteItem, (state, action) => {
        return { allItems: state.allItems.filter((item) => item.id !== action.id) };
    })
);
