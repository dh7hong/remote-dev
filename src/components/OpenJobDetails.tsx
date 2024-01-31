import { useJobDetailsVisibilityContext } from "../lib/hooks";

const OpenJobDetails = () => {
  const { isVisible, toggleVisibility } = useJobDetailsVisibilityContext();

  return (
    <button onClick={toggleVisibility} className="toggle-job-details-btn">
      {isVisible ? "▲" : "▼"}
    </button>
  );
};

export default OpenJobDetails;
