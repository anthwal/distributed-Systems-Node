import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IConsumerGrpcServiceResponse } from '../../../common/Interfaces';
import { RECIPE_PACKAGE_TOKEN } from '../../../helpers/injection-tokens';
import { ClientGrpc } from '@nestjs/microservices';
export interface RecipeService {
  getRecipe(data: { id: number }): Observable<IConsumerGrpcServiceResponse>;
}
@Injectable()
export class ConsumerGrpcService implements OnModuleInit {
  private recipeService: RecipeService;

  constructor(@Inject(RECIPE_PACKAGE_TOKEN) private client: ClientGrpc) {}

  onModuleInit(): any {
    this.recipeService = this.client.getService<RecipeService>('RecipeService');
  }

  getRecipe() {
    return this.recipeService.getRecipe({ id: 42 });
  }
}
