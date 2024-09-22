import "./FirstscreenItem.scss";

export default function FirstscreenItem(props) {
  return (
    <div className="firstscreen-item">
      <div className="firstscreen-icon">
        <img src={props.icon} alt="icon" />
      </div>
      <h3 className="firstscreen-name">{props.title}</h3>
      <div className="firstscreen-description">{props.description}</div>
    </div>
  );
}
