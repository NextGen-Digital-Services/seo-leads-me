import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { teamMembers } from '../../data/team';
import './LeadershipTeam.css';

export const LeadershipTeam = () => {
  return (
    <section className="leadership-section section-light">
      <div className="container">
        {/* Centered Section Title */}
        <SectionTitle
          title="Our Leadership Team"
          subtitle="The Experts Behind SEO Leads Me"
          align="center"
        />

        {/* Team Grid */}
        <div className="team-grid grid-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card fade-up-element">
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="team-image"
                />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
