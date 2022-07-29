import { deleteTeam, getSingleTeam, getTeamPlayers } from './teamsData';
import { deletePlayer } from './playersData';

const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getTeamPlayers(teamFirebaseKey)])
    .then(([teamObject, teamPlayersArray]) => {
      resolve({ ...teamObject, players: teamPlayersArray });
    })
    .catch(reject);
});

const deleteTeamAndPlayers = (teamId) => new Promise((resolve, reject) => {
  getTeamPlayers(teamId).then((teamPlayersArray) => {
    const deletePlayersPromises = teamPlayersArray.map((teamPlayer) => deletePlayer(teamPlayer.firebaseKey));

    Promise.all(deletePlayersPromises).then(() => {
      deleteTeam(teamId).then(resolve);
    });
  })
    .catch(reject);
});

export {
  viewTeamDetails,
  deleteTeamAndPlayers,
};
