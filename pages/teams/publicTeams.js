// import React, { useState } from 'react';
// import { getPublicTeams } from '../../api/teamsData';
// import TeamCards from '../../components/cards/TeamCards';
// import { useAuth } from '../../utils/context/authContext';

// export default function publicTeams() {
//   const [publicTeams, setPublicTeams] = useState([]);
//   const { user } = useAuth();

//   const getAllPublicTeams = () => {
//     getPublicTeams().then(setPublicTeams)
//   }

//   return (
//     <div className="cards-container">
//       {publicTeams?.map((publicTeam) => (
//       <TeamCards key={team.firebaseKey} teamObj={team} user={user} onUpdate={getAllPublicTeams} />
//       ))}
//     </div>
//   );
// }
