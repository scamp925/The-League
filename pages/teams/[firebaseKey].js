import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewTeamDetails } from '../../api/mergedData';
import PlayerCards from '../../components/cards/PlayerCards';

export default function ViewTeam() {
  const [teamDetails, setTeamDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewTeamDetails(firebaseKey).then(setTeamDetails);
  }, [firebaseKey]);

  return (
    <div>
      {teamDetails.players?.map((player) => (
        <PlayerCards key={player.firebaseKey} playerObj={player} onUpdate={viewTeamDetails} />
      ))}
    </div>
  );
}
