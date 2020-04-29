import React, { Component } from 'react';
import ApplicationList from '../components/ApplicationList.js';
import ApplicationForm from '../components/ApplicationForm.js';

class ApplicationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: [
        {
          id: 1,
          name: "The Smiths",
          salary_one: 10000,
          salary_two: 20000,
          total: 90000
        },
        {
          id: 2,
          name: "The Wests",
          salary_one: 12000,
          salary_two: 8000,
          total: 60000
        }
      ]
    };

    this.addNewApplication = this.addNewApplication.bind(this);
}

  addNewApplication(application){
    application.id = Date.now();
    application.total = (application.salary_one + application.salary_two) * 3;

    this.setState((prevState) => {
      return {
        applications: [...prevState.applications, application]
      };
    });
  }

  render() {
    return (
      <div className="application-container">
        <h1>Mortgage Affordability Calculator</h1>

        <h2>Add new application</h2>
        <ApplicationForm handleApplicationSubmit={this.addNewApplication} />

        <h2>Applications</h2>
        <ApplicationList applications={this.state.applications} />
      </div>
    );
  }
}

export default ApplicationContainer;
