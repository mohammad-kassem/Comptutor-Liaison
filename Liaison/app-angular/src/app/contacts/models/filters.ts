export interface IFilters {
  name: string[];
  email: string[];
  phone: string[];
  relationship: string[];
  country: string[];
}

export type FilterKey = "name" | "email" | "phone" | "relationship" | "country"