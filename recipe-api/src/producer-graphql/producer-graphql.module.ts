import { Module } from '@nestjs/common';
import { ProducerGraphqlService } from './services/producer-graphql/producer-graphql.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { ProducerGraphqlResolver } from './resolvers/producer-graphql/producer-graphql.resolver';
import { GqlConfigService } from './services/gql-config/gql-config.service';
@Module({
  imports: [GraphQLModule.forRootAsync<MercuriusDriverConfig>({ driver: MercuriusDriver, useClass: GqlConfigService })],
  providers: [ProducerGraphqlService, ProducerGraphqlResolver, GqlConfigService],
})
export class ProducerGraphqlModule {}
