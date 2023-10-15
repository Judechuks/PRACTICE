import React from "react";

export default function Header({selectedTeam, teamMemberCount}) {// destructuring the props

  return (
    <header className="flex items-center justify-between px-3 py-2 bg-white">
      <h3 className="">Team Member Allocation</h3>
      <h4>{selectedTeam} has {teamMemberCount} Members</h4>
    </header>
  )
}