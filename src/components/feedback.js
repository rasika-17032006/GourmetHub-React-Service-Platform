/*import React, { useState, useRef } from "react";
import "../styles/k1.css"; 
import { Link } from "react-router-dom";

import logo from '../../src/imgs/ll.png';
import bannerImage from '../../src/imgs/it.png';
import feedbackBgImage from '../../src/imgs/fg.png';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [messageVisible, setMessageVisible] = useState(false);
    const ratingStars = useRef([]);
    const feedbackForm = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    
      const toggleExploreMenu = () => {
        setMenuOpen(!menuOpen);
      };

    const handleStarClick = (value) => {
        setRating(value);
        ratingStars.current.forEach((star, index) => {
            if (index < value) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const eventDate = event.target.eventDate.value;
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();

        if (!eventDate) {
            alert("Please select the event date.");
            return;
        }
        if (!name) {
            alert("Please enter your name.");
            return;
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email.");
            return;
        }
        if (!rating) {
            alert("Please provide a rating by selecting stars.");
            return;
        }

        setMessageVisible(true);
    };

    const handleOkClick = () => {
        setMessageVisible(false);
        setRating(0);
        if (feedbackForm.current) {
            feedbackForm.current.reset();
        }
        ratingStars.current.forEach(star => star.classList.remove("active"));
    };

    return (
        <div>
            <header>
                <div className="container">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1><b>Welcome to Dine Delight – Where Every Meal is a Memory!</b></h1>
                    <nav>
                        <ul>
                            <li className="explore">
                            <button className="explore-button" onClick={toggleExploreMenu}>
                                  <span className="veggie-burger">&#9776;</span> <h3>Explore</h3>
                            </button>
                            <div id="explore-menu" className={`explore-menu ${menuOpen ? 'visible' : ''}`}>

                                    <Link to="/"><h2><b>Home</b></h2></Link>
                                    <Link to="/abt"><h2><b>About Us</b></h2></Link>
                                    <Link to="/services"><h2><b>Services</b></h2></Link>
                                    <Link to="/menu"><h2><b>Menus</b></h2></Link>
                                    <Link to="/gallery"><h2><b>Gallery</b></h2></Link>
                                    <Link to="/contact"><h2><b>Contact</b></h2></Link>
                                    <Link to="/feedback"><h2><b>Feedback</b></h2></Link>
                                </div>
                            </li>
                            <li><Link to="/login"><h3>Login</h3></Link></li>
                            <li><Link to="/register"><h3>Register</h3></Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="image-header">
                <div className="image-wrapper">
                    <img src={bannerImage} alt="Dine Delight Catering" className="header-image" />
                    <div className="overlay-text"><h3>FEEDBACK</h3></div>
                </div>
            </section>

            <div className="feedback-page-bg">
                <img src={feedbackBgImage} alt="Background Image" />
            </div>
            <div className="feedback-form">
                <h2>Event Feedback Form</h2>
                <form id="feedbackForm" onSubmit={handleSubmit} ref={feedbackForm}>
                    <label htmlFor="eventDate">Event Date:</label>
                    <input type="date" id="eventDate" name="eventDate" required />

                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="rating">Rate Your Experience:</label>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={`star ${value <= rating ? 'active' : ''}`}
                                data-value={value}
                                onClick={() => handleStarClick(value)}
                                ref={(el) => (ratingStars.current[value - 1] = el)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                    <input type="hidden" id="rating" name="rating" value={rating} required />

                    <label htmlFor="comments">Additional Comments:</label>
                    <textarea id="comments" name="comments" rows="4"></textarea>

                    <div id="messageBox" className={`message-box ${messageVisible ? 'visible' : ''}`}>
                        <p>Feedback submitted successfully!</p>
                        <button id="okButton" onClick={handleOkClick}>OK</button>
                    </div>

                    <button type="submit">Submit Feedback</button>
                </form>
            </div>

            <footer>
                <div className="container1">
                    <h3>&copy; 2025 Dine Delight Catering Services. All rights reserved.</h3>
                </div>
            </footer>
        </div>
    );
};

export default Feedback;*/





























import React, { useState, useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import "../styles/k1.css";
import logo from '../../src/imgs/ll.png';
import bannerImage from '../../src/imgs/it.png';
import feedbackBgImage from '../../src/imgs/fg.png';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Navbar = ({ menuOpen, toggleExploreMenu }) => {
    return (
        <header>
            <div className="container">
                <img src={logo} alt="Logo" className="logo" />
                <h1><b>Welcome to Dine Delight – Where Every Meal is a Memory!</b></h1>
                <nav>
                    <ul>
                        <li className="explore">
                            <button className="explore-button" onClick={toggleExploreMenu}>
                                <span className="veggie-burger">&#9776;</span> <h3>Explore</h3>
                            </button>
                            <div id="explore-menu" className={`explore-menu ${menuOpen ? 'visible' : ''}`}>
                                <Link to="/"><h2><b>Home</b></h2></Link>
                                <Link to="/abt"><h2><b>About Us</b></h2></Link>
                                <Link to="/services"><h2><b>Services</b></h2></Link>
                                <Link to="/menu"><h2><b>Menus</b></h2></Link>
                                <Link to="/gallery"><h2><b>Gallery</b></h2></Link>
                                <Link to="/contact"><h2><b>Contact</b></h2></Link>
                                <Link to="/feedback"><h2><b>Feedback</b></h2></Link>
                            </div>
                        </li>
                        <li><Link to="/login"><h3>Login</h3></Link></li>
                        <li><Link to="/register"><h3>Register</h3></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [messageVisible, setMessageVisible] = useState(false);
    const ratingStars = useRef([]);
    const feedbackForm = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [feedbackData, setFeedbackData] = useState([]);

    const [chartData, setChartData] = useState({
        labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
        datasets: [{
            label: 'Star Rating Distribution',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
        }],
    });

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#333'
                }
            },
            title: {
                display: true,
                text: 'Feedback Star Rating Distribution',
                color: '#333'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y;
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)'
                },
                ticks: {
                    color: '#333'
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)'
                },
                ticks: {
                    color: '#333',
                    stepSize: 1
                }
            }
        }
    };

    const updateChartData = (currentFeedback) => {
        const counts = [0, 0, 0, 0, 0];
        currentFeedback.forEach(fb => {
            if (fb.rating >= 1 && fb.rating <= 5) {
                counts[fb.rating - 1]++;
            }
        });

        setChartData(prevChartData => ({
            ...prevChartData,
            datasets: [{
                ...prevChartData.datasets[0],
                data: counts,
            }],
        }));
    };

    useEffect(() => {
        const dummyInitialFeedback = [
            { id: 1, eventDate: "2024-01-15", name: "Alice", email: "alice@example.com", rating: 4, comments: "Great service!" },
            { id: 2, eventDate: "2024-02-20", name: "Bob", email: "bob@example.com", rating: 5, comments: "Outstanding!" },
            { id: 3, eventDate: "2024-03-10", name: "Charlie", email: "charlie@example.com", rating: 3, comments: "Good, but room for improvement." },
            { id: 4, eventDate: "2024-03-10", name: "David", email: "david@example.com", rating: 5, comments: "Loved it!" },
        ];
        setFeedbackData(dummyInitialFeedback);
        updateChartData(dummyInitialFeedback);
    }, []);

    const toggleExploreMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleStarClick = (value) => {
        setRating(value);
        ratingStars.current.forEach((star, index) => {
            if (star) {
                if (index < value) {
                    star.classList.add("active");
                } else {
                    star.classList.remove("active");
                }
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const eventDate = event.target.eventDate.value;
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const comments = event.target.comments.value.trim();

        if (!eventDate) {
            alert("Please select the event date.");
            return;
        }
        if (!name) {
            alert("Please enter your name.");
            return;
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email.");
            return;
        }
        if (!rating) {
            alert("Please provide a rating by selecting stars.");
            return;
        }

        const newFeedback = {
            eventDate,
            name,
            email,
            rating,
            comments,
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFeedback),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const feedbackWithId = { ...newFeedback, id: Date.now() };

            setFeedbackData(prevFeedback => {
                const updated = [...prevFeedback, feedbackWithId];
                updateChartData(updated);
                return updated;
            });
            setMessageVisible(true);

        } catch (error) {
            console.error("Error submitting feedback:", error);
            alert("Failed to submit feedback. Please try again.");
        }
    };

    const handleOkClick = () => {
        setMessageVisible(false);
        setRating(0);
        if (feedbackForm.current) {
            feedbackForm.current.reset();
        }
        ratingStars.current.forEach(star => star && star.classList.remove("active"));
    };

    return (
        <div>
            <Navbar menuOpen={menuOpen} toggleExploreMenu={toggleExploreMenu} />

            <section className="image-header">
                <div className="image-wrapper">
                    <img src={bannerImage} alt="Dine Delight Catering" className="header-image" />
                    <div className="overlay-text"><h3>FEEDBACK</h3></div>
                </div>
            </section>

            <div className="feedback-page-bg">
                <img src={feedbackBgImage} alt="Background Image" />
            </div>

            <div className="feedback-form">
                <h2>Event Feedback Form</h2>
                <form id="feedbackForm" onSubmit={handleSubmit} ref={feedbackForm}>
                    <label htmlFor="eventDate">Event Date:</label>
                    <input type="date" id="eventDate" name="eventDate" required />

                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="rating">Rate Your Experience:</label>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={`star ${value <= rating ? 'active' : ''}`}
                                data-value={value}
                                onClick={() => handleStarClick(value)}
                                ref={(el) => (ratingStars.current[value - 1] = el)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                    <input type="hidden" id="rating" name="rating" value={rating} required />

                    <label htmlFor="comments">Additional Comments:</label>
                    <textarea id="comments" name="comments" rows="4"></textarea>
                    <button type="submit">Submit Feedback</button>
                    <div id="messageBox" className={`message-box ${messageVisible ? 'visible' : ''}`}>
                        <p>Feedback submitted successfully!</p>
                        <button id="okButton" onClick={handleOkClick}>OK</button>
                    </div>

                </form>
            </div>

            <div className="submitted-feedback-section">
                <h2>Recent Feedback</h2>
                <div className="feedback-list">
                    {feedbackData.length > 0 ? (
                        feedbackData.map(fb => (
                            <div key={fb.id} className="feedback-item">
                                <p><strong>Date:</strong> {fb.eventDate}</p>
                                <p><strong>Name:</strong> {fb.name}</p>
                                <p><strong>Rating:</strong> {'⭐'.repeat(fb.rating)} ({fb.rating}/5)</p>
                                {fb.comments && <p><strong>Comments:</strong> {fb.comments}</p>}
                            </div>
                        ))
                    ) : (
                        <p>No feedback submitted yet.</p>
                    )}
                </div>

                {feedbackData.length > 0 && (
                    <div className="rating-chart">
                        <h3>Star Rating Distribution</h3>
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                )}
            </div>

            <footer>
                <div className="container1">
                    <h3>&copy; 2025 Dine Delight Catering Services. All rights reserved.</h3>
                </div>
            </footer>
        </div>
    );
};

export default Feedback;
