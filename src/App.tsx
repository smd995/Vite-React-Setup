import { useEffect, useState } from "react";
import "./App.css";
import { User } from "./types/user";

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("http://example.com/user");
      const userData = await response.json();
      console.log(userData);
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {user && (
        <div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.id}</p>
        </div>
      )}
    </>
  );
}

export default App;
