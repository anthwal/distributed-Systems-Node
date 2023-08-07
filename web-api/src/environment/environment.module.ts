import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getEnvFileName } from '../helpers/check-env-file';
import { systemConfig } from './configs/systemConfig';
import { targetProducerConfig } from './configs/targetProducerConfig';

const envSuffix = !!process.env.OVERRIDE_ENV ? `.${process.env.OVERRIDE_ENV}` : ``;

const envFileName = getEnvFileName(envSuffix);

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [targetProducerConfig, systemConfig],
      isGlobal: true,
      envFilePath: envFileName,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class EnvironmentModule {}
