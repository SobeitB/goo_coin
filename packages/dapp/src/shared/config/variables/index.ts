export const getEnvVar = (key: string) => {
  const env = import.meta.env[key];
  if (env === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }

  return env || "";
};

export const WALLET_CONNECT:any = getEnvVar("VITE_WALLET_CONNECT");
export const RPC = getEnvVar("VITE_RPC");
