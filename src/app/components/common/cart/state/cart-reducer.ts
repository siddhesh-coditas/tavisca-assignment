import { Action, createReducer, on } from '@ngrx/store';
import { AddToCart, CartState, GetItems } from './cart-action';

export const initState: CartState = {
    allItems: []
}

export const CartReducer = createReducer(
    initState,
    on(AddToCart, (state, action: any) => {
        return {...state, allItems: [...state.allItems, action.item]};
    }),
    on(GetItems, (state) => {
        return state;
    })
);
