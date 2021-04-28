export interface Product {
    id?: string;
    name?: string;
    total?: string;
    stock?: string;
    quantity?: number;
    totalPrice?: number;
    sellTotal?: number;
    cancellation?: boolean;
    change?: number;
    paid?: number;
    measure?: string;
    ingredients?: [];
  }