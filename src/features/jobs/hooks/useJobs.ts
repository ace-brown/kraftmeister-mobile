import { useQuery } from "@tanstack/react-query";
import { jobKeys } from "../../../lib/query-client";
import { getJobs } from "../api/jobs.api";
import { JobFilters } from "../types/job.types";

export function useJobs(filters?: JobFilters) {
  return useQuery({
    queryKey: jobKeys.list(filters),
    queryFn: () => getJobs(filters),
  });
}
