type BicycleType = "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";

export type BiCycle = {
  name: string;
  brand: string;
  price: number;
  type: BicycleType;
  description: string;
  quantity: number;
  inStock: boolean;
};
