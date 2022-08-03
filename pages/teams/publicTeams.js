import React, { useEffect, useState } from 'react';
import { getPublicTeams } from '../../api/teamsData';
import TeamCards from '../../components/cards/TeamCards';

export default function PublicTeams() {
  const [publicTeams, setPublicTeams] = useState([]);

  const getAllPublicTeams = () => {
    getPublicTeams().then((publicTeamsArray) => {
      setPublicTeams(publicTeamsArray);
    });
  };

  useEffect(() => {
    getAllPublicTeams();
  }, []);

  return (
    <>
      <header>
        <h1 className="title">Public Teams</h1>
      </header>
      <div className="cards-container">
        {publicTeams?.map((publicTeam) => (
          <TeamCards key={publicTeam.firebaseKey} teamObj={publicTeam} onUpdate={getAllPublicTeams} />
        ))}
      </div>
    </>
  );
}
