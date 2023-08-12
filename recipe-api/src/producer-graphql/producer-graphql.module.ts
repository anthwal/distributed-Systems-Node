import { Module } from '@nestjs/common';
import { ProducerGraphqlService } from './services/producer-graphql/producer-graphql.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'node:path';
import { ProducerGraphqlResolver } from './resolvers/producer-graphql/producer-graphql.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      typePaths: [`${process.cwd()}/../shared/*.gql`],
      definitions: { path: join(process.cwd(), 'src', 'producer-graphql/gql-compiled/graphql.ts'), outputAs: 'class' },
      graphiql: true,
    }),
  ],
  providers: [ProducerGraphqlService, ProducerGraphqlResolver],
})
export class ProducerGraphqlModule {}
