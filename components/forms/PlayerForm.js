import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getTeams } from '../../api/teamsData';
import { createPlayer, updatePlayer } from '../../api/playersData';

const initialState = {
  imageUrl: '',
  name: '',
  position: '',
  jerseyNumber: '',
  team_id: '',
};
function PlayerForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [teams, setTeams] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getTeams(user.uid).then(setTeams);

    if (obj?.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj?.firebaseKey) {
      updatePlayer(formInput)
        .then(() => router.push('/players/teamRoster'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPlayer(payload).then(() => {
        router.push('/players/teamRoster');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="title mt-5">{obj?.firebaseKey ? 'Update' : 'Add'} a Player</h1>
      <div className="margin-top" />
      <FloatingLabel controlId="floatingInput1" label="Full Name" className="mb-3">
        <Form.Control type="text" placeholder="Ex: Frederico Chiesa" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Position" className="mb-3">
        <Form.Control type="text" placeholder="Ex: Midfielder" name="position" value={formInput.position} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Jersey Number" className="mb-3">
        <Form.Control type="text" placeholder="Ex: 14" name="jerseyNumber" value={formInput.jerseyNumber} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput4" label="Image URL" className="mb-3">
        <Form.Control type="url" placeholder="Enter image url" name="imageUrl" value={formInput.imageUrl} onChange={handleChange} required />
      </FloatingLabel>
      <Form.Select
        name="team_id"
        onChange={handleChange}
        className="mb-3"
        required
      >
        <option value="">Select a Team</option>
        {
            teams.map((team) => (
              <option
                key={team.firebaseKey}
                value={team.firebaseKey}
                selected={obj?.team_id === team.firebaseKey}
              >
                {team.name}
              </option>
            ))
          }
      </Form.Select>
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Set as Favorite?"
        checked={formInput.favorite}
        onChange={(e) => setFormInput((prevState) => ({
          ...prevState,
          favorite: e.target.checked,
        }))}
      />
      <Button type="submit" variant="dark" className="form-btn">{obj?.firebaseKey ? 'Update' : 'Add'} Player</Button>
    </Form>
  );
}

PlayerForm.propTypes = {
  obj: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    jerseyNumber: PropTypes.string,
    team_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default PlayerForm;
