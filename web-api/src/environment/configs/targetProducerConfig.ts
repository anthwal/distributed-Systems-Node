import { ITargetProducerConfig } from '../interfaces/environment-types.interface';

export const targetProducerConfig = () => {
  const targetPort = process.env.TARGET_PORT ? parseFloat(process.env.TARGET_PORT) : 4000;
  return {
    target: {
      targetHost: process.env.TARGET_HOST,
      targetPort,
    } as ITargetProducerConfig,
  };
};
