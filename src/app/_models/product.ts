import { Ingredient } from "./ingredient";

export interface ProductInterface {
    id?: string;
    name?: string;
    total?: string;
    stock?: string;
    neto?: string;
    iva?: string;
    totalPrice?: number;
    bruto?: string;
    measure?: string;
    margen?: string;
    minimun?: string;
    ismaterial?: boolean;
    ingredients?: Ingredient[];
}