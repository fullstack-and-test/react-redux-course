import "./UserProfile.css";

import { Fragment } from "react";

export default function UserProfile({ user }) {
  return (
    <div className="profile-card">
      <>
        <img src={user.avatar} alt={user.name} className="profile-avatar" />
        <h3 className="profile-name">{user.name}</h3>
      </>

      <>
        <div className="contact-info">
          <p className="contact-item">
            <span className="contact-text">{user.email}</span>
            <span className="contact-text">{user.phone}</span>
          </p>
        </div>
      </>
      <p className="profile=-bio">{user.bio}</p>

      <div className="skills-section">
        <h3 className="section-title">Навички</h3>
        <ul className="skills-list">
          {user.skills.map((skill) => (
            <Fragment key={skill}>
              <li className="skill-item">{skill}</li>
            </Fragment>
          ))}
        </ul>
      </div>

      <>
        <h3 className="section-title">Соціальні мережі</h3>
        <div className="social-links">
          {user.socialLinks.map((link) => (
            <Fragment key={`${link.plaform}-${link.url}`}>
              <a href={link.url} className="social-link">
                <span className="social-icon">{link.icon}</span>
                <span className="social-platform">{link.platform}</span>
              </a>
            </Fragment>
          ))}
        </div>
      </>
    </div>
  );
}
