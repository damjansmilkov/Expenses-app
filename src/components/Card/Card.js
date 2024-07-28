import "./Card.css";
function Card(properties) {
  const classes = "card " + properties.className;
  return <div className={classes}>{properties.children}</div>;
}
export default Card;
