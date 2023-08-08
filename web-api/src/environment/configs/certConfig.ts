import { ICertConfig } from '../interfaces/environment-types.interface';

export const certConfig = () => {
  return {
    cert: {
      certPath: process.env.CERT_PATH,
    } as ICertConfig,
  };
};
