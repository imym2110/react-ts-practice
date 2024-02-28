import { Ticket } from "../Model/ticket";

// Ticket data
const ticketData: Ticket[] = [
  {
    ticket_id: "T12345",
    username: "john_doe",
    severity: "High",
    start_date: "2024-02-15",
    end_date: "2024-02-20",
    status: "Closed",
    description:
      "The application crashes upon startup, rendering it unusable for all users. Investigation revealed a critical bug in the initialization process, causing a segmentation fault. The issue was resolved by patching the faulty code and deploying the fix to production.",
    location: "Vadodara",
  },
  {
    ticket_id: "T23456",
    username: "jane_smith",
    severity: "Medium",
    start_date: "2024-02-14",
    end_date: "2024-02-18",
    status: "Open",
    description:
      "Users are experiencing intermittent database connectivity issues, resulting in slow performance and occasional data loss. Initial analysis suggests a problem with the database server configuration or network infrastructure. Database administrators are investigating the issue and working on implementing a solution.",
    location: "Mumbai",
  },
  {
    ticket_id: "T34567",
    username: "bob_jones",
    severity: "Low",
    start_date: "2024-02-13",
    end_date: "2024-02-17",
    status: "Open",
    description:
      "The dashboard UI is misaligned on certain screen resolutions, causing elements to overlap and appear distorted. Frontend developers are investigating the CSS layout and implementing responsive design techniques to ensure consistent rendering across different devices and screen sizes.",
    location: "Bangalore",
  },
  {
    ticket_id: "T45678",
    username: "alice_williams",
    severity: "High",
    start_date: "2024-02-12",
    end_date: "2024-02-16",
    status: "Open",
    description:
      "A critical security vulnerability has been identified in the login module, potentially exposing user credentials to unauthorized access. Immediate action was taken to mitigate the risk by implementing stricter authentication measures and enforcing password policies. All affected users were notified to change their passwords.",
    location: "Udaipur",
  },
  {
    ticket_id: "T56789",
    username: "mike_anderson",
    severity: "High",
    start_date: "2024-02-11",
    end_date: "2024-02-15",
    status: "Open",
    description:
      "The server experienced unexpected downtime during peak hours, disrupting service availability for all users. System administrators are investigating the root cause of the outage, which may be attributed to hardware failure, software bugs, or excessive load. Measures are being taken to restore normal operation and prevent similar incidents in the future.",
    location: "Vadodara",
  },
  {
    ticket_id: "T67890",
    username: "sarah_jackson",
    severity: "Medium",
    start_date: "2024-02-10",
    end_date: "2024-02-14",
    status: "Open",
    description:
      "API calls are experiencing unusually slow response times, impacting the performance of various client applications. Backend engineers are analyzing database queries, optimizing code execution, and scaling infrastructure resources to improve throughput and reduce latency. Load testing will be conducted to validate the effectiveness of the optimizations.",
    location: "Mumbai",
  },
  {
    ticket_id: "T78901",
    username: "chris_roberts",
    severity: "Low",
    start_date: "2024-02-09",
    end_date: "2024-02-13",
    status: "Open",
    description:
      "Users are not receiving email notifications for important system events, such as account registrations and password resets. Email service providers are investigating potential issues with the mail server configuration, domain reputation, and spam filters. Changes are being made to ensure reliable delivery of emails to users' inboxes.",
    location: "Bangalore",
  },
  {
    ticket_id: "T89012",
    username: "emily_davis",
    severity: "High",
    start_date: "2024-02-08",
    end_date: "2024-02-12",
    status: "Open",
    description:
      "Critical data corruption has been detected in customer records, leading to discrepancies in account balances and transaction history. Database administrators are performing data recovery procedures, restoring from backups, and implementing data integrity checks to prevent future corruption. Affected customers will be contacted to verify their account information.",
    location: "Udaipur",
  },
  {
    ticket_id: "T90123",
    username: "kevin_clark",
    severity: "High",
    start_date: "2024-02-07",
    end_date: "2024-02-11",
    status: "Open",
    description:
      "A critical security patch is urgently required to address vulnerabilities identified in the application framework and third-party libraries. DevOps teams are applying the patch across all environments, conducting regression testing, and monitoring for any adverse effects. System administrators are ensuring that all servers are up-to-date and protected against known exploits.",
    location: "Vadodara",
  },
  {
    ticket_id: "T01234",
    username: "lisa_johnson",
    severity: "Medium",
    start_date: "2024-02-06",
    end_date: "2024-02-10",
    status: "Open",
    description:
      "Several hyperlinks on the website are broken, leading to 404 errors when users attempt to navigate to certain pages. Web developers are conducting a thorough audit of all links, updating URLs, and implementing redirects where necessary. Automated tools will be used to periodically check for broken links and ensure a seamless browsing experience.",
    location: "Mumbai",
  },
  {
    ticket_id: "T12340",
    username: "steve_miller",
    severity: "Low",
    start_date: "2024-02-05",
    end_date: "2024-02-09",
    status: "Open",
    description:
      "Reports generated from the system are displaying incorrect formatting, making it difficult for users to interpret the data accurately. Report designers are reviewing the report templates, adjusting column widths, and applying styling enhancements to improve readability. Sample reports will be distributed to stakeholders for validation before deploying the changes.",
    location: "Bangalore",
  },
  {
    ticket_id: "T23450",
    username: "laura_brown",
    severity: "High",
    start_date: "2024-02-04",
    end_date: "2024-02-08",
    status: "Open",
    description:
      "A sudden server crash resulted in the loss of critical data stored in the database, impacting business operations and customer service. Disaster recovery protocols were initiated to restore the database from the most recent backup and recover as much data as possible. Service uptime monitors will be implemented to promptly detect and respond to similar incidents in the future.",
    location: "Vadodara",
  },
];

export default ticketData;
