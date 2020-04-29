import React, { Component } from 'react';

class ApplicationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary_one: null,
      salary_two: null
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalary_OneChange = this.handleSalary_OneChange.bind(this);
    this.handleSalary_TwoChange = this.handleSalary_TwoChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSalary_OneChange(event) {
    this.setState({salary_one: event.target.value});
  }

  handleSalary_TwoChange(event) {
    this.setState({salary_two: event.target.value});
  }
