import Cookies from "universal-cookie";
import { createContext, useEffect, useState } from "react";
import { useTokenManager } from "../hooks/useTokenManager";
import { PostContextProvider } from "./PostContext";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const cookies = new Cookies();
  const { getPayload } = useTokenManager();
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(undefined);

  const headers = { Authorization: token };

  const getUserId = async () => {
    const response = await getPayload(token);
    setUserId(response.id);
  };

  useEffect(() => {
    setToken(cookies.get("UserTokenMaster"));
  }, []);

  useEffect(() => {
    getUserId();
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken, headers, userId }}>
      <PostContextProvider>{children}</PostContextProvider>
    </UserContext.Provider>
  );
}
