import './MyEvents.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MyEvent({ user }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handleEventClick = (event: any) => {
    if (selectedEvent === event) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(event);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://cado.zapto.org/me', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      setEvents(data.events);
    } catch (error) {
      console.error('Erreur lors du chargement des événements:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [user]);

  return (
    <div className="MyEvents">
      <header className="Website__Title">
        <h1 className="MyEvents__h1">Mes évènements</h1>
      </header>
      <div className="MyEvent">
        {events.map((event: { name: string }, index) => (
          <div key={index}>
            <div className="MyEvents__container">
              <button type="button" onClick={() => handleEventClick(event)}>
                {event.name}
              </button>
            </div>
            {selectedEvent === event && (
              <div className="MyEvent__Details">
                <h2 className="MyEvent__Title">
                  {(selectedEvent as any).name.toUpperCase()}
                </h2>
                <h3 className="MyEvent__Date">Date :</h3>
                <p className="MyEvents__p">{(selectedEvent as any).date}</p>
                <h3 className="MyEvent__h3">Participants :</h3>
                <ul className="MyEvent__Participants-List">
                  {selectedEvent.participants.map(
                    (participant: any, index: any) => (
                      <li className="MyEvent__Participant" key={index}>
                        {participant.name} - ({participant.email})
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}

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

export default MyEvent;
