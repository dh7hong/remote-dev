// components/JobDetailsContainer.tsx
import { useJobDetailsVisibilityContext } from '../lib/hooks';
import JobItemContent from './JobItemContent';

const JobDetailsContainer = () => {
  const { isVisible } = useJobDetailsVisibilityContext();

  return isVisible ? <JobItemContent /> : null;
};

export default JobDetailsContainer;