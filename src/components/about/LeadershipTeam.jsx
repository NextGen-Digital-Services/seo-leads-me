import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { teamMembers } from '../../data/team';
import './LeadershipTeam.css';

export const LeadershipTeam = () => {
  return (
    <section className="team">
      <div className="container">
        {/* Centered Section Title */}
        <SectionTitle
          title="Our Leadership Team"
          subtitle="The Experts Behind SEO Leads Me"
          theme="light"
        />

        {/* Team Grid */}
        <div className="team__grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card fade-up-element">
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
              />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
