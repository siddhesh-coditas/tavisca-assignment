import { Action, createAction, props } from '@ngrx/store';
import { ItemCardModel } from 'src/app/components/item/item-card/item-card.model';

export enum CART_ACTIONS {
    ADD_TO_CART = '[Add item] Add'
  }

export const AddToCart = createAction(
    CART_ACTIONS.ADD_TO_CART,
    props<{ item: ItemCardModel }>()
);

// export class AddToCart implements Action {
//     public readonly type = CART_ACTIONS.ADD_TO_CART;
//     constructor(public item: ItemCardModel) { }
// }