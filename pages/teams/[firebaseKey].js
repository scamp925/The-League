/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { viewTeamDetails } from '../../api/mergedData';
import PlayerCards from '../../components/cards/PlayerCards';

export default function ViewTeam() {
  const [teamDetails, setTeamDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const playersForThisTeam = () => {
    viewTeamDetails(firebaseKey).then(setTeamDetails);
  };

  useEffect(() => {
    playersForThisTeam();
  }, []);

  return (
    <div>
      <header>
        <h1 className="players-with-team">Players of {teamDetails.name}</h1>
        <Link href="/players/new" passHref>
          <Button variant="warning" className="addPlayerBtn">Add A Player to {teamDetails.name}</Button>
        </Link>
      </header>
      <div className="cards-container">
        {teamDetails.players?.map((player) => (
          <PlayerCards key={player.firebaseKey} playerObj={player} onUpdate={playersForThisTeam} />
        ))}
      </div>
    </div>
  );
}
