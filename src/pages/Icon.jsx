import React from 'react';
import './Icon.css'; // Import the CSS file for styles

// Sample icons data
const icons = [
    { id: 1, name: 'Home', icon: '🏠' },
    { id: 2, name: 'Settings', icon: '⚙️' },
    { id: 3, name: 'User', icon: '👤' },
    { id: 4, name: 'Message', icon: '✉️' },
    { id: 5, name: 'Search', icon: '🔍' },
    { id: 6, name: 'Notification', icon: '🔔' },
    { id: 7, name: 'Heart', icon: '❤️' },
    { id: 8, name: 'Star', icon: '⭐' },
    { id: 9, name: 'Cart', icon: '🛒' },
    { id: 10, name: 'Camera', icon: '📷' },
    { id: 11, name: 'Music', icon: '🎵' },
    { id: 12, name: 'Film', icon: '🎬' },
    { id: 13, name: 'Map', icon: '🗺️' },
    { id: 14, name: 'Lock', icon: '🔒' },
    { id: 15, name: 'Calendar', icon: '📅' },
    { id: 16, name: 'Clipboard', icon: '📋' },
    { id: 17, name: 'Cloud', icon: '☁️' },
    { id: 18, name: 'Link', icon: '🔗' },
    { id: 19, name: 'Globe', icon: '🌍' },
    { id: 20, name: 'Fire', icon: '🔥' },
];

function Icons() {
    return (
        <div className="icons-container">
            <header className="icons-header">
                <h1>Icon Gallery</h1>
                <p>Explore our collection of icons!</p>
            </header>

            <div className="icons-grid">
                {icons.map(icon => (
                    <div key={icon.id} className="icon-card">
                        <span className="icon">{icon.icon}</span>
                        <h3>{icon.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Icons;
