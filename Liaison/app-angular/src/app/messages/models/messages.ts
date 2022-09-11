export interface IMessage {
  _id: string;
  to: string;
  subject: string;
  content: string;
  sender: any;
  reciever: any;
}

export interface IMessageBody {
  to: string;
  subject: string;
  content: string;
  contactId: string;
}