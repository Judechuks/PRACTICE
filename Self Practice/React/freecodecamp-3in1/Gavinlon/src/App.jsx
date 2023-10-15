import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Employees from './components/Employees';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import MemberDetails from "./components/MemberDetails";
import Footer from './components/Footer';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) ||MemberDetails)
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB")

  function handleTeamSelection(e) {
    setTeam(e.target.value)
  }

  function handleEmployeeCard(e) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id) ? (employee.teamName === selectedTeam) ? {...employee, teamName: ''} : {...employee, teamName: selectedTeam} : employee
    )
    setEmployees(transformedEmployees)
  }

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam]);

  // Check if any member is added or removed
  (MemberDetails.length > employees.length || MemberDetails.length < employees.length) &&
  (function checkIfNewEmployeeAdded() {
      setEmployees(MemberDetails) // update the new members
  })();

  return (
    <>
      <Router>
        <Nav />
        <Header 
          selectedTeam={selectedTeam} 
          teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} 
        />
        <Routes>
          <Route path='/' element={
            <Employees 
              employees={employees} 
              selectedTeam={selectedTeam} 
              handleEmployeeCard={handleEmployeeCard} 
              handleTeamSelection={handleTeamSelection} 
            />
          }>
          </Route>
          <Route path='/teams' element={
            <GroupedTeamMembers 
              employees={employees} 
              selectedTeam={selectedTeam} 
              setTeam={setTeam} 
            />
          }>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
