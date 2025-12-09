import { useEffect, useState } from "react";
import userService, { type User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.GetAll<User>();
    request
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

    return () => cancel();
  }, []);

  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
