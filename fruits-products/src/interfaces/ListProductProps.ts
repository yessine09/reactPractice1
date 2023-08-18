export interface Products{
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface PropsProducts {
  data: Products[];
}
