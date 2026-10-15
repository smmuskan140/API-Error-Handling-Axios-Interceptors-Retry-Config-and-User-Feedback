import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry once after the initial failure, with an exponential delay.
      retry: 1,
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
    },
    // Mutations are not retried automatically because they may cause side effects.
    mutations: {
      retry: 0,
    },
  },
});
