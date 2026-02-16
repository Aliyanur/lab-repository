import { useState } from "react";
import type { User } from "./types";

const INITIAL_DATA: User[] = [
  { name: "Aliya", email: "aliya@mail.com", age: 25 },
  { name: "Nuray", email: "nuray@mail.com", age: 30 },
  { name: "Zhasmin", email: "zhasmin@mail.com", age: 28 },
  { name: "Zhanerke", email: "zhanerke@mail.com", age: 22 },
  { name: "Aizere", email: "aizere@mail.com", age: 35 }
];

const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] =
    useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;

    setSearchTerm(term);

    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(
          term.toLowerCase()
        )
      )
    );
  };

  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Search</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name"
        style={{ marginRight: "10px" }}
      />

      <button onClick={handleClear}>
        Clear
      </button>

      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>
              {user.name} ({user.email}) — Age: {user.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchApp;