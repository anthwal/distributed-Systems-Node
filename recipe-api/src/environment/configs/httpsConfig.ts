import { IHttpsConfig } from '../interfaces/environment-types.interface';

export const httpsConfig = () => ({
  https: {
    https: process.env.HTTPS === 'true',
  } as IHttpsConfig,
});
