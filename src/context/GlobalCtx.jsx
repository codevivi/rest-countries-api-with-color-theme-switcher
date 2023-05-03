import { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const GlobalCtx = createContext();
export function GlobalProvider({ children }) {
  const [theme, toggleTheme] = useTheme();

  return <GlobalCtx.Provider value={{ theme, toggleTheme }}>{children}</GlobalCtx.Provider>;
}
