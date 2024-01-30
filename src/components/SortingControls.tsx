import { useJobItemsContext } from "../lib/hooks";

export default function SortingControls() {
 
  const { sortBy, handleChangeSortBy } = useJobItemsContext();

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>
      <SortingButton onClick={()=> handleChangeSortBy("relevant")} isActive={sortBy==="relevant"}>
        {/* onClick has no parameters! */}
        Relevant
      </SortingButton>
      <SortingButton onClick={()=> handleChangeSortBy("recent")} isActive={sortBy==="recent"}>
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  // onClick has no parameters!
  isActive: boolean;
};

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--${isActive} ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
