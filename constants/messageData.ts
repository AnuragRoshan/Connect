// import { User, Conversation, Message } from '@/types/messageTypes';

export interface User {
  _id: string;
  name: string;
  avatar: string;
}

export interface Conversation {
  _id: string;
  participants: string[]; // Array of User IDs
  lastMessage: string; // Actual message text of the last message
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  _id: string;
  conversationId: string; // ID of the associated conversation
  sender: string; // User ID of the sender
  text: string;
  sentAt: Date;
  readStatus: boolean;
}

export const users: User[] = [
  { _id: "1", name: "TechCorp", avatar: "/placeholder.svg?height=40&width=40" },
  {
    _id: "2",
    name: "FashionBrand",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  { _id: "3", name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
  {
    _id: "4",
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export const conversations: Conversation[] = [
  {
    _id: "1",
    participants: ["1", "3"],
    lastMessage: "Hello! We're interested in collaborating with you.", // Actual message text
    createdAt: new Date("2023-05-01T10:00:00Z"),
    updatedAt: new Date("2023-05-01T14:30:00Z"),
  },
  {
    _id: "2",
    participants: ["2", "4"],
    lastMessage:
      "We love your style! Would you be interested in modeling our new summer collections?",
    createdAt: new Date("2023-05-02T09:00:00Z"),
    updatedAt: new Date("2023-05-02T16:45:00Z"),
  },
  {
    _id: "3",
    participants: ["1", "4"],
    lastMessage:
      "We love your style! Would you be interested in modeling our new summer collection?",
    createdAt: new Date("2023-05-02T09:00:00Z"),
    updatedAt: new Date("2023-05-02T16:45:00Z"),
  },
];

export const messages: Message[] = [
  // Conversation 1
  {
    _id: "1",
    conversationId: "1",
    sender: "1",
    text: "Hello! We're interested in collaborating with you on an upcoming project. Do you have some time to chat?",
    sentAt: new Date("2023-05-01T14:30:00Z"),
    readStatus: true,
  },
  {
    _id: "2",
    conversationId: "1",
    sender: "3",
    text: "Hi! That sounds great. I'd love to know more about the project. What did you have in mind?",
    sentAt: new Date("2023-05-01T14:35:00Z"),
    readStatus: false,
  },
  {
    _id: "3",
    conversationId: "1",
    sender: "1",
    text: "We're launching a new tech product and would love for you to review it. We think it would be a great fit for your audience.",
    sentAt: new Date("2023-05-01T14:40:00Z"),
    readStatus: true,
  },
  {
    _id: "4",
    conversationId: "1",
    sender: "3",
    text: "That's exciting! Could you tell me more about the product? What are the key features you'd like me to highlight?",
    sentAt: new Date("2023-05-01T14:45:00Z"),
    readStatus: true,
  },
  {
    _id: "5",
    conversationId: "1",
    sender: "1",
    text: "Sure! It's an AI-powered wearable device that tracks daily activities and offers health insights. We'd like you to focus on the personalized health tracking feature.",
    sentAt: new Date("2023-05-01T14:50:00Z"),
    readStatus: true,
  },
  {
    _id: "6",
    conversationId: "1",
    sender: "3",
    text: "Sounds perfect! I think my audience would really appreciate something like this. When do you need the review to be ready?",
    sentAt: new Date("2023-05-01T14:55:00Z"),
    readStatus: true,
  },
  {
    _id: "7",
    conversationId: "1",
    sender: "1",
    text: "We're aiming for mid-May, just in time for our launch event. We'll ship the product to you next week.",
    sentAt: new Date("2023-05-01T15:00:00Z"),
    readStatus: true,
  },
  {
    _id: "8",
    conversationId: "1",
    sender: "3",
    text: "Perfect! I’ll plan my schedule around that. Looking forward to it.",
    sentAt: new Date("2023-05-01T15:05:00Z"),
    readStatus: true,
  },

  // Conversation 2
  {
    _id: "9",
    conversationId: "2",
    sender: "2",
    text: "We love your style! Would you be interested in modeling our new summer collections?",
    sentAt: new Date("2023-05-02T16:45:00Z"),
    readStatus: false,
  },
  {
    _id: "10",
    conversationId: "2",
    sender: "4",
    text: "Thank you! That sounds amazing. Could you share more details about the collection and the shoot?",
    sentAt: new Date("2023-05-02T16:50:00Z"),
    readStatus: false,
  },
  {
    _id: "11",
    conversationId: "2",
    sender: "2",
    text: "The collection features vibrant, breezy summer outfits with a focus on eco-friendly materials. The shoot will be outdoor and we'd love to have it in late May.",
    sentAt: new Date("2023-05-02T16:55:00Z"),
    readStatus: false,
  },
  {
    _id: "12",
    conversationId: "2",
    sender: "4",
    text: "That sounds lovely! I'm free around that time, so late May works for me. Where will the shoot be held?",
    sentAt: new Date("2023-05-02T17:00:00Z"),
    readStatus: false,
  },
  {
    _id: "13",
    conversationId: "2",
    sender: "2",
    text: "We're planning to have it on a beach in Malibu. We believe the location complements the summer theme perfectly.",
    sentAt: new Date("2023-05-02T17:05:00Z"),
    readStatus: false,
  },
  {
    _id: "14",
    conversationId: "2",
    sender: "4",
    text: "That sounds amazing! Count me in. Please send me all the details once things are finalized.",
    sentAt: new Date("2023-05-02T17:10:00Z"),
    readStatus: false,
  },
  {
    _id: "15",
    conversationId: "2",
    sender: "2",
    text: "Absolutely! Looking forward to working with you.",
    sentAt: new Date("2023-05-02T17:15:00Z"),
    readStatus: false,
  },

  // Conversation 3
  {
    _id: "16",
    conversationId: "3",
    sender: "4",
    text: "We love your style! Would you be interested in modeling our new summer collection?",
    sentAt: new Date("2023-05-02T16:45:00Z"),
    readStatus: false,
  },
  {
    _id: "17",
    conversationId: "3",
    sender: "1",
    text: "I'm flattered! Could you tell me a bit more about the collection and what you'd need from me?",
    sentAt: new Date("2023-05-02T16:50:00Z"),
    readStatus: false,
  },
  {
    _id: "18",
    conversationId: "3",
    sender: "4",
    text: "Of course! It's a sustainable summer collection with a lot of focus on relaxed, easy-going outfits. We think your aesthetic is a perfect match.",
    sentAt: new Date("2023-05-02T16:55:00Z"),
    readStatus: false,
  },
  {
    _id: "19",
    conversationId: "3",
    sender: "1",
    text: "That sounds amazing! I'd love to be part of it. When do you need me to model for the collection?",
    sentAt: new Date("2023-05-02T17:00:00Z"),
    readStatus: false,
  },
  {
    _id: "20",
    conversationId: "3",
    sender: "4",
    text: "We are planning the shoot for the first week of June, and the location will be finalized soon. Are you available then?",
    sentAt: new Date("2023-05-02T17:05:00Z"),
    readStatus: false,
  },
  {
    _id: "21",
    conversationId: "3",
    sender: "1",
    text: "June works perfectly! Please let me know the location once it's set.",
    sentAt: new Date("2023-05-02T17:10:00Z"),
    readStatus: false,
  },
];
