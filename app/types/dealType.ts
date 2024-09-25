export interface Deal {
  id: string;
  businessName: string;
  businessLogo: string;
  agreedRate: number;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
  platform: string;
  contentType: string;
  contractTerms: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}
