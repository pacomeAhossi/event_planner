import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'>
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                <button className='get-started-button'>Get Started</button>
            </section>
            <section className='events_categories'>
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday</li>
                    <li>Anniversary</li>
                    <li>Wedding</li>
                    <li>Baby</li>
                    <li>Graduation</li>
                    <li>Family</li>
                </ul>
                <ul>
                    <h2> Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>
            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <div className='testimonial'>
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className='author'>- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
                <div className="testimonial">
                    <p>"Event Planner made organizing my outdoor fitness easier. I recommend it!"</p>
                    <p className="author">- Laurent Daniel</p>
                </div>
            </section>
            <section className='contact'></section>
        </div>
    );
};

export default EventPlanner;
