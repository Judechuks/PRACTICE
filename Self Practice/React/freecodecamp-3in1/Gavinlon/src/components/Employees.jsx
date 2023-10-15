import React from "react";

export default function Employees(props) { // without destructuring the props

  return (
    <main className="main">
      <div className="team-option">
        <select value={props.selectedTeam} onChange={props.handleTeamSelection}>
          <option value="TeamA">Team A</option>
          <option value="TeamB">Team B</option>
          <option value="TeamC">Team C</option>
          <option value="TeamD">Team D</option>
        </select>
      </div>
      <div className="card-collection">
        {
          props.employees.map((employee) => (
            <div key={employee.id} id={employee.id} className={employee.teamName === props.selectedTeam ? 'card standout' : 'card'} onClick={props.handleEmployeeCard}>
              <img src={employee.profilePic} alt="Profile Picture" />
              <div className="details">
                <h4>Name: {employee.fullName}</h4>
                <p>Designation: {employee.designation}</p>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}