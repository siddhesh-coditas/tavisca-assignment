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
        let isRemoved = false;
        return {
            allItems: state.allItems.filter((item) => {
                if (item.id === action.id && !isRemoved) {
                    isRemoved = true;
                    return false;
                }
                return true;
            })
        };
    })
);
