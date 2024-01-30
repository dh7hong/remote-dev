import { createContext } from "react";
import { useActiveId } from "../lib/hooks";

type ActiveIdContext = {
  activeId: number | null;
};

export const ActiveIdContext = createContext<ActiveIdContext | null>(null);

export default function ActiveIdContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeId = useActiveId();

  return (
    <ActiveIdContext.Provider
      value={{
        activeId,
      }} // we now have an object, that's what we are transporting around our app
    >
      {/* now any component that needs access to the activeId 
      can use the useContext hook */}
      {children}
    </ActiveIdContext.Provider>
  );
}
