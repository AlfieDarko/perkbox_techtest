import React from "react";
import { FormControl, Panel, FormGroup, ControlLabel } from "react-bootstrap";

const JobsStatus = () => {
  return (
    <div>
      <Panel>
        <FormGroup controlId="jobform.status">
          <ControlLabel>What is your current status?</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">status</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>
      </Panel>
    </div>
  );
};

export default JobsStatus;
