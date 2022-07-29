import { getSingleTeam, getTeamPlayers } from './teamsData';

const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getTeamPlayers(teamFirebaseKey)])
    .then(([teamObject, teamPlayersArray]) => {
      resolve({ ...teamObject, players: teamPlayersArray });
    })
    .catch(reject);
});

const deleteTeamAndPlayers = () => {
  console.warn('Hold please');
};

export {
  viewTeamDetails,
  deleteTeamAndPlayers,
};
