import { apiClient } from "../../../lib/api/client";
import { Job, JobFilters } from "../types/job.types";

export function getJobs(filters?: JobFilters): Promise<Job[]> {
  const param = new URLSearchParams();

  if (filters?.status) param.append("status", filters.status);
  if (filters?.date) param.append("date", filters.date);

  const query = param.toString();
  return apiClient<Job[]>(`/jobs${query ? `?${query}` : ""}`);
}
