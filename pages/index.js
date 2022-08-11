/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getPlayers } from '../api/playersData';
import PlayerCards from '../components/cards/PlayerCards';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const [fav, setFav] = useState([]);
  const { user } = useAuth();

  const favoritePlayer = () => {
    getPlayers(user.uid).then((playersArray) => {
      const results = playersArray.filter((favPlayer) => favPlayer.favorite === true);
      setFav(results);
    });
  };

  useEffect(() => {
    favoritePlayer();
  }, []);

  return (
    <div>
      <header className="home-title">
        <h1>Ciao, {user.displayName}!</h1>
      </header>
      <section className="cards-container">
        {fav?.map((favPlayer) => (
          <PlayerCards key={favPlayer?.firebaseKey} playerObj={favPlayer} onUpdate={favoritePlayer} />
        ))}
      </section>
    </div>
  );
}

export default Home;
