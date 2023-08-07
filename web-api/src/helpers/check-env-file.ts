import { existsSync } from 'node:fs';
export const getEnvFileName = (envSuffix: string) => {
  const isOverridden = envSuffix !== '';

  const defaultFile = `${process.cwd()}/.env`;

  if (isOverridden && existsSync(`${defaultFile}${envSuffix}`)) {
    return `${defaultFile}${envSuffix}`;
  }

  if (isOverridden) {
    console.warn(`Override file .env${envSuffix} not found falling back to .env`);
  }

  if (!existsSync(defaultFile)) {
    console.warn('Default environment file .env not found default process env variables will be used.');
  }
  return defaultFile;
};
