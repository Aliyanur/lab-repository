import type { User } from "./types";
// Ch. 6, p. 98-100: Type-checking props
interface UserCardProps {
    user: User;
    isActive?: boolean; // optional
    children: React.ReactNode;
  }
  const UserCard = ({
    user,
    isActive = true,
    children
  }: UserCardProps) => {
    return (
      <div style={{ opacity: isActive ? 1 : 0.5 }}>
        <h2>{user.name}</h2>
        <p>{user.email} | Age: {user.age}</p>
        {children}
      </div>
    );
  };
  
  export default UserCard;