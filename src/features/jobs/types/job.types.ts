export const JOB_STATUSES = ['OPEN', 'IN_PROGRESS', 'DONE', 'CANCELLED'] as const;
export type JobStatus = (typeof JOB_STATUSES)[number];

export const JOB_STATUS_LABELS: Record<JobStatus, string> = {
  OPEN: 'Offen',
  IN_PROGRESS: 'In Bearbeitung',
  DONE: 'Erledigt',
  CANCELLED: 'Abgebrochen',
};

export interface Job {
  id: string;
  companyId: string;
  customerId?: string;
  title: string;
  description?: string;
  status: JobStatus;
  address?: string;
  photos: string[];
  createdAt: string;
}

export type JobFilters = {
  status?: JobStatus;
  date?: string;
};

export type CreateJobPayload = {
  title: string;
  description?: string;
  status?: JobStatus;
  address?: string;
  customerId?: string;
};

export type UpdateJobPayload = {
  id: string;
  data: Partial<CreateJobPayload>;
};
