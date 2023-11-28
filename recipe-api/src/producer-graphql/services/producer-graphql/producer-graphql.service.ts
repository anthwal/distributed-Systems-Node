import { Injectable } from '@nestjs/common';
import { IIngredient, IRecipe } from '../../../common/Interfaces';

@Injectable()
export class ProducerGraphqlService {
  public getRecipeById(id: number): Omit<IRecipe, 'ingredients'> {
    if (id !== 42) throw new Error(`recipe ${id} not found`);
    return {
      id,
      name: 'Chana Daal',
      steps: 'Throw it in a pot...',
    };
  }

  public getIngredientsByRecipe(recipe: IRecipe): IIngredient[] {
    return recipe.id !== 42
      ? []
      : [
          { id: 1, name: 'Chana Daal', quantity: '100 gm' },
          { id: 2, name: 'Dhaniya Masala', quantity: '10 gm' },
        ];
  }
}
