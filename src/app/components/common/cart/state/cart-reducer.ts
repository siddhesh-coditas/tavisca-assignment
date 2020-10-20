import { Action, createReducer, on } from '@ngrx/store';
import { ItemCardModel } from '../../../item/item-card/item-card.model';
import { AddToCart, CART_ACTIONS } from './cart-action';

interface InitialState {
    allItems: ItemCardModel[]
}

export const initState: InitialState = {
    allItems: []
}

export function CartReducer(state: ItemCardModel[] = [], action: Action) {
    switch (action.type) {
        case "[Add item] Add": {
            return state.push(action['item']);
        }
        default: {
            return state;
        }
    }
}

// export const CartReducer = createReducer<InitialState>(
//     initState,
//     on(
//         CART_ACTIONS.ADD_TO_CART,
//         (state, action) => (state = {
//             ...state,
//             allItems: state.allItems.push(action.),
//         })
//     )
// );