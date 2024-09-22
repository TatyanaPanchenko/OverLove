import ReviewItem from "./ReviewItem/ReviewItem";
import "./Reviews.scss";
import firstAvatar from "../../assets/Reviews/firstAvatar.png";
import secondAvatar from "../../assets/Reviews/secondAvatar.png";
import thirdAvatar from "../../assets/Reviews/thirdAvatar.png";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews-title">Why you'll love it</h2>
        <div className="reviews-wrapper">
          <ReviewItem
            avatar={firstAvatar}
            name="Sean Farmer"
            job="CEO"
            text="Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam lorem ipsum dolor."
          />
          <ReviewItem
            avatar={secondAvatar}
            name="Nick Parker"
            job="Wed-designer"
            text="Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore. Orem ipsum."
          />
          <ReviewItem
            avatar={thirdAvatar}
            name="Mishel Latuale"
            job="Project Manager"
            text="Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Ipsum dolor sit amet."
          />
        </div>
      </div>
    </section>
  );
}
