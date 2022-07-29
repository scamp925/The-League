import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL TEAMS
const getTeams = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/teams.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET SINGLE TEAM
const getSingleTeam = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/teams/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// GET SINGLE TEAM'S PLAYERS
const getTeamPlayers = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players.json?orderBy="team_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// CREATE TEAM
const createTeam = (newTeamObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/teams.json`, newTeamObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/teams/${response.data.name}.json`, body)
        .then(() => {
          getTeams(newTeamObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

// UPDATE TEAM
const updateTeam = (teamObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/teams/${teamObj.firebaseKey}.json`, teamObj)
    .then(() => getTeams(teamObj.uid).then(resolve))
    .catch(reject);
});

// DELETE TEAM
const deleteTeam = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/teams/${firebaseKey}.json`)
    .then(resolve)
    .catch(reject);
});

export {
  getTeams,
  getSingleTeam,
  getTeamPlayers,
  createTeam,
  updateTeam,
  deleteTeam,
};
