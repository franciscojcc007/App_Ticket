
import EventItem from "./components/EventItem";
import data from "../../data/events.json";

const events = data._embedded.events;

const Events = ({ searchTerm }) => {

  const handleEventItemClick = (id) => {
    console.log('Evento clickeado', id);
  }

  const renderEvent = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm))
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images?.[0]?.url || 'ruta-a-imagen-default.jpg'}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ))

  }

  return (
    <div>
      <h1>Eventos</h1>
      {renderEvent()}
    </div>
  );
};

export default Events;
