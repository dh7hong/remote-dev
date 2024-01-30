import { useActiveIdContext } from "../lib/hooks";
import { JobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export default function JobList({ jobItems, isLoading }: JobListProps) {
  const { activeId } = useActiveIdContext();
  if (jobItems.length === 0) {
    return <EmptyListContent />;
  }
  return (
    <ul className="job-list">
      {/* {!jobItems && <EmptyListContent />} */}
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems?.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}

function EmptyListContent() {
  return (
    <ul className="job-list">
      <p className="job-list__start-view">The search list is empty</p>
    </ul>
  );
}
