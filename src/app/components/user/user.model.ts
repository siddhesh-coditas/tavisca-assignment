import { ItemCardModel } from '../item/item-card/item-card.model';

export class UserModel {
    public id?: number;
    public name: string;
    public email: string;
    public password: string;
    public items: any[];
}
