import React, { Component } from "react";
import { Tabs, Tab, Jumbotron, Grid } from "react-bootstrap";
import Todo from "../Todo/App";
import JobsApp from "../Jobs/JobsApp";

export default class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Test App</h1>
          </Grid>
        </Jumbotron>

        <Grid>
          <Tabs defaultActiveKey={1} id="tabs">
            <Tab eventKey={1} title="Jobs" style={{ padding: 10 }}>
              <JobsApp />
            </Tab>
            <Tab eventKey={2} title="Todo" style={{ padding: 10 }}>
              <Todo />
            </Tab>
          </Tabs>
        </Grid>
      </div>
    );
  }
}
