
const EventItem = ({ name, info, id, image, onEventClick }) => {


  const handleSeeMoreClick = () => {
    (e) => {
      e.stopPropagation()
      onEventClick(id)
    }
  }

  return (
    <div >
      <img src={image} alt={name} width={250} height={200} />
      <h3>{name}</h3>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver mas</button>
    </div>
  )
}

export default EventItem;