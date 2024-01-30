import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../lib/hooks";

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();
  // whenever we use this BookmarksContext, or any kind of context,
  // we have to make sure that the context is not null,
  // and only then we can destructure the values from it,
  // so we will create a custom hook for that..
  // in the hooks file which we will create in the same folder
  // where we can see where the context is created as well as
  // how it should be consumed
  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      {/* when there is an onClick event, 
      we don't want it to bubble it upwards,
      as in bubbling of the event */}
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) ? "filled" : ""}`}
      />
    </button>
  );
}
