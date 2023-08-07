import { ISystemConfig } from '../interfaces/environment-types.interface';

export const systemConfig = () => {
  const port = process.env.PORT ? parseFloat(process.env.PORT) : 3000;
  return {
    system: {
      host: process.env.HOST,
      port,
    } as ISystemConfig,
  };
};
