import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { getPlayers } from '../api/playersData';
import { useAuth } from '../utils/context/authContext';
import PlayerCards from './cards/PlayerCards';

function FavoritePlayers() {
  const [fav, setFav] = useState({});
  const { user } = useAuth();

  const getAllPlayers = () => {
    getPlayers(user.uid);
  };

  const favoritePlayer = () => {
    const results = getAllPlayers?.filter((favPlayer) => favPlayer.favorite === true);
    setFav(results);
  };

  return (
    <div>
      <PlayerCards key={fav?.firebaseKey} playerObj={fav} onUpdate={favoritePlayer} />
    </div>
  );
}

// FavoritePlayers.propTypes = {
//   players: PropTypes.arrayOf(PropTypes.shape({
//     firebaseKey: PropTypes.string,
//     favorite: PropTypes.bool,
//   })),
// };

// FavoritePlayers.defaultProps = {
//   players: {},
// };

export default FavoritePlayers;
