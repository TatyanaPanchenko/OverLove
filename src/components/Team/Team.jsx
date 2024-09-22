import TeamItem from "./TeamItem/TeamItem";
import "./Team.scss";
import firstPhotoTeam from "../../assets/Team/firstPhotoTeam.png";
import secondPhotoTeam from "../../assets/Team/secondPhotoTeam.png";
import thirdPhotoTeam from "../../assets/Team/thirdPhotoTeam.png";
import fourthPhotoTeam from "../../assets/Team/fourthPhotoTeam.png";

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        <h2 className="team-title">Project's team</h2>
        <div className="team-info">
          <div className="team-text">
            Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliquat enim ad minim veniam
            lorem ipsum dolor.Sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
          <button className="team-button">Join our team</button>
        </div>
        <div className="team-wrapper">
          <TeamItem
            photo={firstPhotoTeam}
            name="Pieter Omvlee"
            job="Designer"
            instagram="https://www.instagram.com/"
            telegram="https://web.telegram.org/"
            linkedin="https://linkedin.com/"
          />
          <TeamItem
            photo={secondPhotoTeam}
            name="Loyd Maywe"
            job="Php developer"
            instagram="https://www.instagram.com/"
            telegram="https://web.telegram.org/"
            linkedin="https://linkedin.com/"
          />
          <TeamItem
            photo={thirdPhotoTeam}
            name="Latte Macchiato"
            job="CEO Company"
            instagram="https://www.instagram.com/"
            telegram="https://web.telegram.org/"
            linkedin="https://linkedin.com/"
          />
          <TeamItem
            photo={fourthPhotoTeam}
            name="Cheese Cake"
            job="Art Director"
            instagram="https://www.instagram.com/"
            telegram="https://web.telegram.org/"
            linkedin="https://linkedin.com/"
          />
        </div>
      </div>
    </section>
  );
}
