export enum status {
  sent,
  received,
  read,
}

export class Chat {
  sender: string;
  time: Date;
  text: string;
  status: status;

  constructor(sender: string, time: Date, text: string, status: status) {
    this.sender = sender;
    this.time = time;
    this.text = text;
    this.status = status;
  }
}
