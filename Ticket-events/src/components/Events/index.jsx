
import EventItem from "./components/EventItem/index.jsx";
import data from "../../data/events.json";

const events = data._embedded.events;

const Events = () => {
  return (
    <div>
      <h1>Eventos</h1>
      {events.map((eventItem) => (
        <EventItem
          key={`event-item-${eventItem.id}`}
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images?.[0]?.url || 'ruta-a-imagen-default.jpg'}
        />
      ))}
    </div>
  );
};

export default Events;
