import React, { useState } from 'react';
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

export default FavoritePlayers;
