export interface IContact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  relationship: string;
  location: {lat: number, long: number};
  country: string;
  user: string;
  liker?: string;
  messages?: string[];
  createdAt: string;
  updatedAt: string;
}