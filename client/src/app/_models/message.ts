export interface Message {
    id: number
    sendId: number
    sendUsername: string
    senderPhotoUrl: string
    recipientId: number
    recipientUsername: string
    recipientPhotoUrl: string
    content: string
    dateRead?: Date
    messageSent: Date
  }
  