import { QueryClient } from '@tanstack/react-query';
import { JobFilters } from '../features/jobs/types/job.types';

export const jobKeys = {
  all: ['jobs'] as const,
  list: (filters?: JobFilters) => [...jobKeys.all, 'list', filters] as const,
  detail: (id: string) => [...jobKeys.all, 'detail', id] as const,
};

export const customerKeys = {
  all: ['customers'] as const,
  list: (search?: string) => [...customerKeys.all, 'list', search] as const,
  detail: (id: string) => [...customerKeys.all, 'detail', id] as const,
};

export const quoteKeys = {
  all: ['quotes'] as const,
  list: () => [...quoteKeys.all, 'list'] as const,
  detail: (id: string) => [...quoteKeys.all, 'detail', id] as const,
};

export const invoiceKeys = {
  all: ['invoices'] as const,
  list: () => [...invoiceKeys.all, 'list'] as const,
  detail: (id: string) => [...invoiceKeys.all, 'detail', id] as const,
};

export const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
