export interface IMessage {
  _id: string;
  to: string;
  subject: string;
  content: string;
  sender: any;
  reciever: any;
  createdAt: string;
  updatedAt: string;
}

export interface IMessageBody {
  to: string;
  subject: string;
  content: string;
  contactId: string;
}