import { FiAward } from "react-icons/fi";
import { achievements } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import "./Achievements.css";

function AchievementCard({ achievement }) {
  const revealRef = useReveal();
  return (
    <div className="achievement-card card reveal" ref={revealRef}>
      <FiAward size={24} className="achievement-card__icon" />
      <div>
        <h3>{achievement.title}</h3>
        <p className="achievement-card__event">{achievement.event} &middot; {achievement.organizer}</p>
        <p className="achievement-card__result">{achievement.result} &mdash; Team {achievement.team}</p>
        <p className="achievement-card__description">{achievement.description}</p>
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section section--alt">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Recognition</span>
          <h2>Achievements</h2>
        </div>

        <div className="achievements-list">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
