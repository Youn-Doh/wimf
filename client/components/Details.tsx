interface Props {
  name: string
  image: string
  units: string
}

export default function Details(props: Props) {
  return (
    <>
      <div className="item-details">
        <img className="item-image" src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.units}</p>
        <p></p>
      </div>
    </>
  )
}
