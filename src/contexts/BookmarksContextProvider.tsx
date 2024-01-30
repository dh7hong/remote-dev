import { createContext } from "react";
import { useJobItems, useLocalStorage } from "../lib/hooks";
import { JobItemExpanded } from "../lib/types";

type BookmarksContext = {
  bookmarkedIds: number[];
  handleToggleBookmark: (id: number) => void;
  // this function takes in an id but doesn't return anything,
  // it just updates the bookmarkedIds array
  bookmarkedJobItems: JobItemExpanded[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookmarksContext | null>(null);

export default function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );
  
  // you can actually run useState with a
  // function as an argument and it will only run once
  const { jobItems: bookmarkedJobItems, isLoading} = useJobItems(bookmarkedIds);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  }; // this function takes in an id but doesn't return anything,
  // it just updates the bookmarkedIds array

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds, // array of bookmarked ids
        handleToggleBookmark, // function that toggles a bookmark
        bookmarkedJobItems, // array of bookmarked job items
        isLoading, // boolean indicating if the bookmarked job items are loading
      }} // we now have an object, that's what we are transporting around our app
    >
      {/* now any component that needs access to the 
     bookmarkedIds or handleToggleBookmark 
     function can use the useContext hook */}
      {children}
    </BookmarksContext.Provider>
  );
}


