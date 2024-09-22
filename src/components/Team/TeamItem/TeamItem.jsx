import "./TeamItem.scss";

export default function TeamItem(props) {
  return (
    <div className="team-card">
      <img src={props.photo} alt="photoTeam" />
      <div className="team-inner">
        <div className="team-name">{props.name}</div>
        <div className="team-job">{props.job}</div>
        <div className="team-social">
          <a className="team-instagram" href={props.instagram}></a>
          <a className="team-telegram" href={props.telegram}></a>
          <a className="team-linkedin" href={props.linkedin}></a>
        </div>
      </div>
    </div>
  );
}
