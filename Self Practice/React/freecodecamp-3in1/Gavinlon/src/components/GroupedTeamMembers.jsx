import React, {useState} from 'react'

function GroupedTeamMembers({employees, selectedTeam, setTeam}) {
  const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers)

  function groupedTeamMembers() {
    let teams = []
    // teamA
    let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA')
    let teamA = {team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true}
    teams.push(teamA)
    // teamB
    let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB')
    let teamB = {team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true}
    teams.push(teamB)
    // teamC
    let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC')
    let teamC = {team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true}
    teams.push(teamC)
    // teamD
    let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD')
    let teamD = {team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true}
    teams.push(teamD)
    return teams;
  }

  function handleTeamClick(e) {
    let transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === e.currentTarget.id ? {...groupedData, collapsed: !groupedData.collapsed} : groupedData)
    setGroupedData(transformedGroupData)
    setTeam(e.currentTarget.id)
  }

  return (
    <div className='card-collection min-h-[75vh] place-content-start'>
      {
        groupedEmployees.map((item) => { 
          return (
            <div key={item.team} className='card self-start'>
              <h3 id={item.team} onClick={handleTeamClick}>
                Team name: {item.team}
              </h3>
              <div id={"collapse_" + item.team} className={item.collapsed ? "collapsed" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className='mt-2' key={member.id}>
                        <h4 className='mt-2'>
                          <span className='text-dark'>Full Name: {member.fullName}</span>
                        </h4>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default GroupedTeamMembers