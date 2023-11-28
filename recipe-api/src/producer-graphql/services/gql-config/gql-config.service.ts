import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'node:path';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): MercuriusDriverConfig {
    return {
      typePaths: [join(process.cwd(), '**', '**.gql'), join(process.cwd(), '..', 'shared', '**.gql')],
      graphiql: true,
      definitions: {
        path: join(process.cwd(), 'src', 'producer-graphql', 'generated-graphql', 'graphql.ts'),
        outputAs: 'class',
        emitTypenameField: true,
      },
    };
  }
}
