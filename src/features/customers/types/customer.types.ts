export interface Customer {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  createdAt: string;
  deletedAt?: string | null;
}

export type CreateCustomerPayload = {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
};

export type UpdateCustomerPayload = {
  id: string;
  data: Partial<CreateCustomerPayload>;
};
