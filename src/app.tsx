import { useEffect } from "react";
import { useAppStore } from "./stores/app";
import { useUserStore } from "./stores/user";
import "./app.scss";

function App({ children }: { children: React.ReactNode }) {
  const { checkLogin } = useUserStore();
  const { init } = useAppStore();

  useEffect(() => {
    init();
    checkLogin();
  }, []);

  return children;
}

export default App;