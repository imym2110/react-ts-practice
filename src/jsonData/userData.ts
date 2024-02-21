// Define a type for a user
type User = {
  user_id: number;
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
  location: "Vadodara" | "Udaipur" | "Mumbai" | "Bangalore";
};

// User data
const userData: User[] = [
  {
    user_id: 1,
    username: "JohnDoe",
    email: "john@example.com",
    password: "user1234",
    role: "user",
    location: "Vadodara",
  },
  {
    user_id: 2,
    username: "AdminJane",
    email: "jane@example.com",
    password: "admin1234",
    role: "admin",
    location: "Mumbai",
  },
];

export default userData;
