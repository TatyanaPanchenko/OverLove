import "./ReviewItem.scss";

export default function ReviewItem(props) {
  return (
    <div className="reviewItem-inner">
      <div className="reviewItem-about">
        <div className="reviewItem-avatar">
          <img src={props.avatar} alt="avatar" />
        </div>
        <div className="reviewItem-data">
          <div className="reviewItem-name">{props.name}</div>
          <div className="reviewItem-job">{props.job}</div>
        </div>
      </div>

      <div className="reviewItem-text">{props.text}</div>
    </div>
  );
}
