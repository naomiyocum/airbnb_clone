export default function Card() {
  return (
    <div className="card">
      <img src={require("../images/katie-zaferes.png")} alt="Katie"/>
      <div className="card--rating">
        <img src={require("../images/star.png")} alt="star"/>
        <span>5.0</span>
        <span className="grey">(6).</span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136 </span>/ person</p>
    </div>
  )
}