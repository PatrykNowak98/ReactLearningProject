// src/App.tsx
import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        {
          {
            setError(err.message);
            setLoading(false);
          }
        }
      });
    // Prefferable way but does not appear in strict mode, if needed remove the setup of loading for then field and catch field
    // .finally(() => {
    //   setLoading(false);
    // });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
