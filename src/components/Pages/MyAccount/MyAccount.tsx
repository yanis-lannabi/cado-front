import { useEffect, useState } from 'react';

const MyAccount = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/me', {
          method: 'GET',
          credentials: 'include', // Assurez-vous que les cookies sont inclus dans la requête
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data.user); // Stockez les informations utilisateur
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          {/* Affichez d'autres informations utilisateur si nécessaire */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyAccount;
