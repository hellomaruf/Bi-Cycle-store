type BicycleType = "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";

export interface UpdateData {
  price: number;
  quantity: number;
}

export type BiCycleInterface = {
  name: string;
  brand: string;
  price: number;
  type: BicycleType;
  description: string;
  quantity: number;
  inStock: boolean;
};
