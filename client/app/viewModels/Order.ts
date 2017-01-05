import { Cart } from './Cart';
import { ShippingDetails } from './ShippingDetails';

export interface Order {
    items:Array<Cart>;
    firstName:string;
    lastName:string;
    address1:string;
    address2:string;
    state:string;
    zip:string;
}