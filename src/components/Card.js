export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={require(`../images/${props.img}`)} alt="Katie"/>
      <div className="card--stats">
        <img className="card--star" src={require("../images/star.png")} alt="star"/>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}).</span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price} </span>/ person</p>
    </div>
  )
}