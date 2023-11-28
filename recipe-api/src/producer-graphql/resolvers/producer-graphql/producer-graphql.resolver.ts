import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProducerGraphqlService } from '../../services/producer-graphql/producer-graphql.service';
import { IIngredient, IRecipe } from '../../../common/Interfaces';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Recipe')
export class ProducerGraphqlResolver {
  constructor(public producerGraphql: ProducerGraphqlService) {}

  @Query('pid')
  public getPid(): number {
    return process.pid;
  }
  @Query('recipe')
  public getRecipe(@Args('id', ParseIntPipe) id: number): Omit<IRecipe, 'ingredients'> {
    return this.producerGraphql.getRecipeById(id);
  }

  @ResolveField('ingredients')
  public getIngredients(@Parent() recipe: IRecipe): IIngredient[] {
    return this.producerGraphql.getIngredientsByRecipe(recipe);
  }
}
