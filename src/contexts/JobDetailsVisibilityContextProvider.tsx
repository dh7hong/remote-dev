import { createContext, useState } from "react";

type JobDetailsVisibilityContext = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

export const JobDetailsVisibilityContext =
  createContext<JobDetailsVisibilityContext | null>(null);

export default function JobDetailsVisibilityContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <JobDetailsVisibilityContext.Provider
      value={{
        isVisible,
        toggleVisibility,
      }} // we now have an object, that's what we are transporting around our app
    >
      {/* now any component that needs access to the activeId 
      can use the useContext hook */}
      {children}
    </JobDetailsVisibilityContext.Provider>
  );
}