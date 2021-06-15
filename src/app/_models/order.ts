import { OrderProduct } from "./order-product";

export interface Order {
    id?: string;
    firstname?: string;
    lastname?: string;
    address?: string;
    phone?: string;
    numberaddres?: string;
    reference?: string;
    comment?: string;
    totalprice?: number;
    products?: Array<OrderProduct>;
}