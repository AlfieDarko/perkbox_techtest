import React from "react";
import { Button, ButtonGroup, Panel } from "react-bootstrap";

const JobsNumber = props => {
  console.log(props);
  const { jobCount, handleJobCount } = props;

  return (
    <div>
      <Panel>
        <h5>How many jobs do you have?</h5>

        <ButtonGroup>
          <Button
            onClick={e => handleJobCount(0)}
            className={jobCount === 0 ? "selected" : null}
          >
            0
          </Button>
          <Button
            onClick={e => handleJobCount(1)}
            className={jobCount === 1 ? "selected" : null}
          >
            1
          </Button>
          <Button
            onClick={e => handleJobCount(2)}
            className={jobCount === 2 ? "selected" : null}
          >
            2
          </Button>
          <Button
            onClick={e => handleJobCount(3)}
            className={jobCount === 3 ? "selected" : null}
          >
            3
          </Button>
        </ButtonGroup>
      </Panel>
    </div>
  );
};

export default JobsNumber;
