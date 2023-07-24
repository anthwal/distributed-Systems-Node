export interface IRecipe {
  id: number;
  name: string;
  steps: string;
  ingredients: {
    id: number;
    name: string;
    quantity: string;
  }[];
}

export interface IProducerHttpServiceResponse {
  producer_pid: number;
  recipe: IRecipe;
}
