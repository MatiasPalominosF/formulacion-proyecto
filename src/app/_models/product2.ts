import { Ingredient } from "./ingredient";

export interface Product {
  id?: string;
  name?: string;
  total?: string;
  stock?: string;
  cancellatedby?: string;
  quantity?: number;
  date?: any;
  datecancellation?: any;
  totalPrice?: number;
  sellTotal?: number;
  cancellation?: boolean;
  change?: number;
  paid?: number;
  measure?: string;
  ingredients?: Ingredient[];
}