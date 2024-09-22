import "./ProcessItem.scss";

export default function ProcessItem(props) {
  return (
    <div className="processItem-inner" style={{ color: props.color }}>
      <div className="processItem-icon">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="processItem-about">
        <div className="processItem-tech">{props.tech}</div>
        <div className="processItem-description">{props.description}</div>
      </div>
    </div>
  );
}
