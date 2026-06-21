import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { defaultQueryClient } from '../lib/query-client';

interface Props {
  children: ReactNode;
}

/** Wraps the app with TanStack Query context. */
export function QueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={defaultQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
