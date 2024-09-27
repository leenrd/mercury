const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw Error(`Missing String environment variable for ${key}`);
  }

  return value;
};

export const NODE_ENV = getEnv("NODE_ENV", "development");
export const PORT = getEnv("PORT", "3000");
// export const DATABASE_URL = getEnv("DATABASE_URL");

// export const APP_ORIGIN = getEnv("APP_ORIGIN", "http://localhost:5173/");
// export const JWT_SECRET = getEnv("JWT_SECRET");
// export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");
