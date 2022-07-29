/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getTeams } from '../../api/teamsData';
import TeamCards from '../../components/cards/TeamCards';
import { useAuth } from '../../utils/context/authContext';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();

  const getAllTeams = () => {
    getTeams(user.uid).then((teamsArray) => {
      setTeams(teamsArray);
    });
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div>
      <header>
        <h1>Teams</h1>
      </header>
      <div className="cards-container">
        {teams?.map((team) => (
          <TeamCards key={team.firebaseKey} teamObj={team} onUpdate={getAllTeams} />
        ))}
      </div>
    </div>
  );
}
