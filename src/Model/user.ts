export type User = {
  user_id: number;
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
  location: "Vadodara" | "Udaipur" | "Mumbai" | "Bangalore";
};
