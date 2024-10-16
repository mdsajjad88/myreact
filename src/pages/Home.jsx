import React from 'react';
import './Home.css'; // Import the CSS file for styles

function Home() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to My Website</h1>
                <p>Your one-stop solution for all things amazing!</p>
                <button className="cta-button">Get Started</button>
            </header>

            <section className="features-section">
                <h2>Features</h2>
                <div className="features">
                    <div className="feature-card">
                        <h3>Feature One</h3>
                        <p>Description of feature one goes here.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Feature Two</h3>
                        <p>Description of feature two goes here.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Feature Three</h3>
                        <p>Description of feature three goes here.</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
