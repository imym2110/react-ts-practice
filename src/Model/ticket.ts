export type Ticket = {
  ticket_id: string;
  username: string;
  severity: "Low" | "Medium" | "High";
  start_date: string;
  end_date: string;
  status: "Open" | "Closed";
  description: string;
  location: "Vadodara" | "Mumbai" | "Bangalore" | "Udaipur";
};
