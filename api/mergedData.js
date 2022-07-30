import { deleteTeam, getSingleTeam, getTeamPlayers } from './teamsData';
import { deletePlayer, getSinglePlayer } from './playersData';

const viewTeamOfPlayer = (playerFirebaseKey) => new Promise((resolve, reject) => {
  getSinglePlayer(playerFirebaseKey)
    .then((playerObject) => {
      getSingleTeam(playerObject.team_id)
        .then((teamObject) => {
          resolve({ teamObject, ...playerObject });
        });
    }).catch(reject);
});

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
  viewTeamOfPlayer,
  viewTeamDetails,
  deleteTeamAndPlayers,
};
