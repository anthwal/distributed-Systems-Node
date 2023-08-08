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

export interface IProducerResponse {
  producer_pid: number;
  recipe: IRecipe;
}

export interface IConsumerHttpServiceResponse {
  consumer_pid: number;
  producer_data: IProducerResponse;
}

export interface IConsumerHttpsServiceResponse {
  consumer_pid: number;
  producer_data: IProducerResponse;
}
