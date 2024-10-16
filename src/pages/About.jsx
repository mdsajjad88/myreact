import React from 'react';
import './About.css'; // Import the CSS file for styles

function About() {
    const teamMembers = [
        { id: 1, name: 'Alice Smith', role: 'CEO', bio: 'Alice has over 10 years of experience in the industry.' },
        { id: 2, name: 'Bob Johnson', role: 'CTO', bio: 'Bob is a tech enthusiast and expert in software development.' },
        { id: 3, name: 'Charlie Brown', role: 'CFO', bio: 'Charlie manages our finances with expertise and precision.' },
    ];

    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Learn more about our team and mission.</p>
            </header>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>We strive to deliver the best services to our customers and make a positive impact in our community.</p>
            </section>

            <section className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-member">
                            <h3>{member.name}</h3>
                            <p><strong>Role:</strong> {member.role}</p>
                            <p>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;
