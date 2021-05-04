export interface Product {
  id?: string;
  name?: string;
  total?: string;
  stock?: string;
  quantity?: number;
  date?: Date;
  totalPrice?: number;
  sellTotal?: number;
  cancellation?: boolean;
  change?: number;
  paid?: number;
  measure?: string;
  ingredients?: [];
}