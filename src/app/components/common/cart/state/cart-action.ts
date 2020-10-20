import { Action, createAction, props } from '@ngrx/store';
import { ItemCardModel } from 'src/app/components/item/item-card/item-card.model';

export interface CartState {
  allItems: ItemCardModel[]
}

export enum CART_ACTIONS {
  ADD_TO_CART = '[Add item] Add',
  GET_ITEMS = '[Get item] Get'
}

export const AddToCart = createAction(
  CART_ACTIONS.ADD_TO_CART,
  props<{ item: ItemCardModel }>()
);

export const GetItems = createAction(
  CART_ACTIONS.GET_ITEMS
);
