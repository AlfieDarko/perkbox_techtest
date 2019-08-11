import React from "react";
import {
  FormGroup,
  Form,
  FormControl,
  ControlLabel,
  Panel
} from "react-bootstrap";

const JobsForm = props => {
  console.log(props);
  return (
    <div>
      <Panel>
        <Form>
          <h5>Job {props.index + 1}</h5>
          <FormGroup controlId="jobform.occupation">
            <ControlLabel>What is your occupation?</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="jobform.company-name">
            <ControlLabel>Company Name</ControlLabel>
            <FormControl type="text" placeholder="Enter your company name" />
          </FormGroup>

          <FormGroup controlId="jobform.income">
            <ControlLabel>Income</ControlLabel>
            <FormControl type="number" placeholder="Enter Amount" />
          </FormGroup>
        </Form>
      </Panel>
    </div>
  );
};

export default JobsForm;
