import { Injectable } from '@nestjs/common';
import { IMetaDataResponse, IRecipe } from '../../../common/Interfaces';

@Injectable()
export class ProducerGrpcService {
  public getRecipeById(id: number): IRecipe {
    if (id !== 42) throw new Error(`recipe ${id} not found`);
    return {
      id,
      name: 'Chana Daal',
      steps: 'Throw it in a pot...',
      ingredients: [
        { id: 1, name: 'Chana Daal', quantity: '100 gm' },
        { id: 2, name: 'Dhaniya Masala', quantity: '10 gm' },
      ],
    };
  }

  public getMetaData(): IMetaDataResponse {
    return { pid: process.pid };
  }
}
