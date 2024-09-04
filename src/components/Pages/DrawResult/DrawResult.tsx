import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DrawResult.scss';

// fictive list of participants to test the feature

// preparing the code for when the draw API is ready
// interface Giver {
//   giverName: string;
// }
//
// interface Participants [{
//   participantName: string;
// }]
//
// interface Receiver {
//   receiverName: string;
// }

interface Event {
  name: string;
  date: string;
}

function DrawResult() {
  const [drawPair, setDrawPair] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useParams();

  useEffect(() => {
    const fetchDrawPair = async () => {
      try {
        const response = await fetch(
          `https://cado.zapto.org/resultat/${token}`
        );
        const data = await response.json();
        setDrawPair(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDrawPair();
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="DrawResult">
      <h2>Draw result</h2>
      <p>Here is your secret santa {drawPair.receiver}</p>
    </div>
  );
}

export default DrawResult;
