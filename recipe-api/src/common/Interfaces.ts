export interface IRecipe {
  id: number;
  name: string;
  steps: string;
  ingredients: IIngredient[];
}
export interface IIngredient {
  id: number;
  name: string;
  quantity: string;
}

export interface IProducerHttpServiceResponse {
  producer_pid: number;
  recipe: IRecipe;
}

export interface IMetaDataResponse {
  pid: number;
}
