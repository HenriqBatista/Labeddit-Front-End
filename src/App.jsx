import {Router} from "./routes/Router";
import { UserContextProvider } from "./context/UserContext";
import { PostContextProvider } from "./context/PostContext";
const App = () => {
  return (
    <UserContextProvider>
      <PostContextProvider>
        <Router />
      </PostContextProvider>
    </UserContextProvider>
  );
};

export default App;
