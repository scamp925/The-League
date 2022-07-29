import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createTeam, updateTeam } from '../../api/teamsData';

const initialState = {
  logoUrl: '',
  name: '',
  firebaseKey: '',
};
function TeamForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
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
    if (obj.firebaseKey) {
      updateTeam(formInput)
        .then(() => router.push('/teams/teams'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createTeam(payload).then(() => {
        router.push('/teams/teams');
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-black mt-5">{obj?.firebaseKey ? 'Update' : 'Add'} a Team</h1>
        <FloatingLabel controlId="floatingInput1" label="Team Name" className="mb-3">
          <Form.Control type="text" placeholder="Gli Azzurri" name="name" value={formInput.name} onChange={handleChange} required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput2" label="Image URL of Team Logo" className="mb-3">
          <Form.Control type="url" placeholder="Enter logo url" name="logoUrl" value={formInput.logoUrl} onChange={handleChange} required />
        </FloatingLabel>
        <Button type="submit" variant="success" className="form-btn">{obj?.firebaseKey ? 'Update' : 'Add'} Team</Button>
      </Form>
    </div>
  );
}

TeamForm.propTypes = {
  obj: PropTypes.shape({
    logoUrl: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

TeamForm.defaultProps = {
  obj: initialState,
};

export default TeamForm;
