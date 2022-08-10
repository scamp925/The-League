/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { deletePlayer } from '../../api/playersData';
import { getTeams } from '../../api/teamsData';

function PlayerCards({ playerObj, onUpdate }) {
  const deleteThisPlayer = () => {
    if (window.confirm(`Warning: ${playerObj.name} will be permanently deleted. Are you sure you want to continue?`)) {
      deletePlayer(playerObj.firebaseKey).then(() => onUpdate());
    }
  };

  const [teams, setTeams] = useState([]);
  const { user } = useAuth();

  const findTeam = teams?.find((team) => playerObj.team_id === team.firebaseKey);

  useEffect(() => {
    getTeams(user.uid).then(setTeams);
  }, []);

  if (user.uid === playerObj.uid) {
    return (
      <div>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={playerObj.imageUrl} alt={playerObj.name} />
          <Card.Body className="player-card-body">
            <section className="flex-child">
              <Card.Text>#{playerObj.jerseyNumber}</Card.Text>
            </section>
            <section className="flex-child name-and-position">
              <Card.Title>{playerObj.name}</Card.Title>
              <Card.Text>{playerObj.position}</Card.Text>
              <Card.Text className="team-name">{findTeam?.name}</Card.Text>
              <p className="card-text bold">{playerObj.favorite ? <span className="badge bg-success favorite-badge"><i className="fa fa-heart bold" aria-hidden="true" />Favorite</span> : ''}
              </p>
            </section>
          </Card.Body>
          <footer className="player-cards-footer">
            <Link href={`/players/edit/${playerObj.firebaseKey}`} passHref>
              <Button variant="info" className="edit-btn">Edit</Button>
            </Link>
            <Button variant="danger" onClick={deleteThisPlayer}>Delete</Button>
          </footer>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={playerObj.imageUrl} alt={playerObj.name} />
        <Card.Body className="player-card-body">
          <section className="flex-child">
            <Card.Text>#{playerObj.jerseyNumber}</Card.Text>
          </section>
          <section className="flex-child name-and-position">
            <Card.Title>{playerObj.name}</Card.Title>
            <Card.Text>{playerObj.position}</Card.Text>
            <Card.Text className="team-name">{findTeam?.name}</Card.Text>
          </section>
        </Card.Body>
      </Card>
    </div>
  );
}

PlayerCards.propTypes = {
  playerObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    jerseyNumber: PropTypes.number,
    team_id: PropTypes.string,
    favorite: PropTypes.bool,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PlayerCards;
