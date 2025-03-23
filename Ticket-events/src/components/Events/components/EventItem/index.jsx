
const EventItem = ({name, info, image}) =>{
  return(
    <div>
      <img src={image} alt={name} width={250} height={200} />
      <h3>{name}</h3>
      <p>{info}</p>
    </div>
  )
}

export default EventItem;