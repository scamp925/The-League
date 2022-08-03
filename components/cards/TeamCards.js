import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteTeamAndPlayers } from '../../api/mergedData';
import { useAuth } from '../../utils/context/authContext';

function TeamCards({ teamObj, onUpdate }) {
  const deleteTeamPlusPlayers = () => {
    if (window.confirm(`Are you sure you want to delete ${teamObj.name}? Doing so will also delete all associated players.`)) {
      deleteTeamAndPlayers(teamObj.firebaseKey).then(() => onUpdate());
    }
  };

  const { user } = useAuth();

  if (user.uid === teamObj.uid) {
    return (
      <div>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={teamObj.logoUrl} alt={teamObj.name} />
          <Card.Body>
            <Card.Title>{teamObj.name}</Card.Title>
            <Card.Text>{teamObj.public === true ? 'Public Team' : 'Private Team'}</Card.Text>
          </Card.Body>
          <footer className="team-card-footer">
            <Link href={`/teams/${teamObj.firebaseKey}`} passHref>
              <Button variant="success" className="view-btn">View</Button>
            </Link>
            <Link href={`/teams/edit/${teamObj.firebaseKey}`} passHref>
              <Button variant="info" className="edit-btn">Edit</Button>
            </Link>
            <Button variant="danger" onClick={deleteTeamPlusPlayers}>Delete</Button>
          </footer>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={teamObj.logoUrl} alt={teamObj.name} />
        <Card.Body>
          <Card.Title>{teamObj.name}</Card.Title>
          <Card.Text>{teamObj.public === true ? 'Public Team' : 'Private Team'}</Card.Text>
        </Card.Body>
        <footer className="team-card-footer">
          <Link href={`/teams/${teamObj.firebaseKey}`} passHref>
            <Button variant="success" className="view-btn">View</Button>
          </Link>
        </footer>
      </Card>
    </div>
  );
}

TeamCards.propTypes = {
  teamObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    logoUrl: PropTypes.string,
    name: PropTypes.string,
    public: PropTypes.bool,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TeamCards;
