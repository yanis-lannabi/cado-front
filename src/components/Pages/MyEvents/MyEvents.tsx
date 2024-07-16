import './MyEvents.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function MyEvent() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://165.227.232.51:3000/me');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Erreur lors du chargement des événements:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="WebsiteName">
      <header className="Website__Title">
        <h1>Mes évènements</h1>
      </header>
      <div className="MyEvent">
        {events.map((event: { name: string }, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleEventClick(event)}
          >
            {event.name}
          </button>
        ))}

        {selectedEvent && (
          <div>
            <h2>{(selectedEvent as any).name}</h2>
            <p>{(selectedEvent as any).details}</p>
          </div>
        )}

        <h2>Nouvel événement</h2>
        <button
          type="button"
          className="account-creation-button"
          onClick={() => navigate('/creer-un-evenement')}
        >
          Créer un événement
        </button>
      </div>
    </div>
  );
}

// là où on récupère les events, il faut des propriétés name et details
export default MyEvent;
