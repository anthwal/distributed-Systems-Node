import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ServerUnaryCall } from '@grpc/grpc-js';
import { ProducerGrpcService } from '../../services/producer-grpc/producer-grpc.service';
import { IMetaDataResponse, IRecipe } from '../../../common/Interfaces';

@Controller('grpc')
export class ProducerGrpcController {
  constructor(private producerGrpcService: ProducerGrpcService) {}
  @GrpcMethod('RecipeService', 'GetRecipe')
  public getRecipe(requestData: { id: number }, call: ServerUnaryCall<{ id: number }, any>): IRecipe {
    return this.producerGrpcService.getRecipeById(call.request.id);
  }

  @GrpcMethod('RecipeService', 'GetMetaData')
  public getMetaData(): IMetaDataResponse {
    return this.producerGrpcService.getMetaData();
  }
}
