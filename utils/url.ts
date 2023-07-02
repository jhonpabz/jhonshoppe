type Url = {
  API_BASE_URL?: string | undefined;
};

export const url: Url = {
  API_BASE_URL: process.env.API_BASE_URL,
};
