import { GetServerSideProps } from "next";
import { User, Notification } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({
  user,
  notifications,
  analytics,
  currentTime
}: DashboardProps) {

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>

      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>

      <h2>Analytics</h2>
      <div>
        <p>Page Views: {analytics.pageViews}</p>
        <p>Sessions: {analytics.sessions}</p>
        <p>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</p>
      </div>

      <h2>Notifications ({unreadCount} unread)</h2>

      <ul>
        {notifications.map(n => (
          <li key={n.id}>
            {n.type} - {n.message}
          </li>
        ))}
      </ul>

      <p>Last updated: {currentTime}</p>

    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const user = {
    id: "user-123",
    name: "Demo User",
    email: "demo@example.com",
    avatar: "/avatars/demo.jpg",
    role: "user" as const,
  };

  const notifications = [
    { id: "1", type: "info" as const, message: "Welcome!", read: false, createdAt: "2026-03-01" },
    { id: "2", type: "success" as const, message: "Profile updated", read: true, createdAt: "2026-02-28" }
  ];

  const analytics = {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
    bounceRate: Math.random() * 100,
  };

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString()
    }
  };
};