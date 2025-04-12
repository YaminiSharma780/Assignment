import { useEffect } from "react";
import { useState } from "react";

export default function SearchComp() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  const fetchedUsers = users.filter((u) =>
    u.firstName.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className="main-component">
      <div onChange={(e) => setText(e.target.value)}>
        <input type="text" name="text" placeholder="type something.." />
      </div>
      <div>
        {fetchedUsers.length > 0 ? (
          fetchedUsers.map((u) => {
            return (
              <div key={u.id}>
                <p>{u.firstName}</p>
              </div>
            );
          })
        ) : (
          <p>No User Found...</p>
        )}
      </div>
    </div>
  );
}
