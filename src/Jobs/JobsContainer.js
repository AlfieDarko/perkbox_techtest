import React, { useState } from "react";
import JobsForm from "./JobsForm";
import JobsNumber from "./JobsNumber";
import JobStatus from "./JobsStatus";
const JobsContainer = () => {
  const [jobCount, setJobCount] = useState(0);
  const handleJobCount = jobCount => {
    setJobCount(jobCount);
  };

  const renderJobsForms = jobCount => {
    let jobsCountArray = Array.from({ length: jobCount });
    if (jobsCountArray.length > 0) {
      return (
        <div>
          {jobsCountArray.map((_, index) => (
            <JobsForm key={index} index={index} />
          ))}
        </div>
      );
    } else return <JobStatus />;
  };

  return (
    <React.Fragment>
      <JobsNumber handleJobCount={handleJobCount} jobCount={jobCount} />
      {renderJobsForms(jobCount)}
    </React.Fragment>
  );
};

export default JobsContainer;
