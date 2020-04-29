import React from 'react';
import Application from './Application.js';

function ApplicationList({ applications }) {
  const applicationNodes = applications.map(({ id, name, salary_one, salary_two, total }) => {
    return (
      <Application name={name} key={id}>Salary One: £{salary_one.toLocaleString()} + Salary Two: £{salary_two.toLocaleString()} = Maximum Mortgage of £{total.toLocaleString()}</Application>
    );
  });

  return (
    <div className="application-list">
      {applicationNodes}
    </div>
  );
}

export default ApplicationList;
