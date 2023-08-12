import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { ProducerGraphqlService } from '../../services/producer-graphql/producer-graphql.service';
import { IIngredient, IRecipe } from '../../../common/Interfaces';
import { ParseIntPipe } from '@nestjs/common';

@Resolver()
export class ProducerGraphqlResolver {
  constructor(public producerGraphql: ProducerGraphqlService) {}
  @Query('recipe')
  public getRecipe(@Args('id', ParseIntPipe) id: number): Omit<IRecipe, 'ingredients'> {
    return this.producerGraphql.getRecipe(id);
  }

  @ResolveProperty('ingredients')
  public getIngredients(@Parent() recipe: IRecipe): IIngredient[] {
    console.log('in ingredients with recipe', recipe);
    return this.producerGraphql.getIngredientsByRecipe(recipe);
  }

  @Query('pid')
  public getPid(): number {
    return process.pid;
  }
}
