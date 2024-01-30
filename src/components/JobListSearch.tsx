import { useJobItemsContext } from "../lib/hooks";
import JobList from "./JobList";

export default function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemsContext();
  // where you want to keep the component reuable, 
  // so you create a wrapper component, 
  // essentially just concerned with getting the data

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
//  JobList takes in jobItemsSortedAndSliced and isLoading as props
//  Another place JobList is used is in src/components/BookmarksPopover.tsx
//  JobList takes in bookmarkedJobItems and isLoading as props
}
