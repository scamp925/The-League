import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <header className="home-title">
        <h1>Ciao, {user.displayName}!</h1>
      </header>
    </div>
  );
}

export default Home;
