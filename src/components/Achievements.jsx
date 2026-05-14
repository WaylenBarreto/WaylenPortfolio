import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
    {
        icon: <Trophy size={40} />,
        title: "1st Place - Technix Hackathon",
        location: "GEC 2026",
        description: "Secured the top spot at the Technix Hackathon held at Goa College of Engineering, showcasing rapid prototyping and system design."
    },
    {
        icon: <Award size={40} />,
        title: "1st Place - AI Track",
        location: "BITS Hyderabad",
        description: "Winner of the AI track at BITS Pilani Hyderabad, developing cutting-edge artificial intelligence solutions."
    },
    {
        icon: <Trophy size={40} />,
        title: "2nd Place - Odyssey National Hackathon",
        location: "PCCE 2026",
        description: "Podium finish at the Odyssey National Level Hackathon, competing against top teams across the country."
    },
    {
        icon: <Star size={40} />,
        title: "2nd Place - Quantexera YBIT Hackathon",
        location: "Sawantwadi",
        description: "Recognized for excellence in full-stack development and problem-solving at the YBIT Hackathon."
    },
    {
        icon: <Award size={40} />,
        title: "1st Place - Goalpreuners Pitch it",
        location: "GEC",
        description: "First place in the Pitch it event, demonstrating strong entrepreneurial vision and communication skills."
    },
    {
        icon: <Trophy size={40} />,
        title: "2nd Place - AIEM Techurja",
        location: "Pitching Event",
        description: "Podium finish at the AIEM Techurja pitching competition, presenting technical innovations to a panel of experts."
    },
    {
        icon: <Trophy size={40} />,
        title: "3rd Place - Ideas 4.0",
        location: "Innovation Summit",
        description: "Awarded for Trustbus: A Privacy-first AI designed to build ultra-reliable transport solutions."
    }
];

const galleryImages = [
    "/images/technix_win.jpg",
    "/images/odyssey_win.jpg",
    "/images/bits_hyderabad_win.jpg",
    "/images/quantexera_win.jpg",
    "/images/aiem_techurja_win.jpg",
    "/images/pitching_moment.jpg",
    "/images/technix_certificates.jpg",
    "/images/media__1772960551925.jpg",
    "/images/media__1772960914420.jpg"
];

const Achievements = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="achievements" className="achievements-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="achievements-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="achievement-stats">
                        <span className="stat-item">3x Hackathon Winner</span>
                        <span className="stat-divider">|</span>
                        <span className="stat-item">4x Ideathon Winner</span>
                    </div>
                    <h2 className="section-title">Podium <span className="text-accent">Finishes</span></h2>
                    <p className="section-subtitle">A track record of high-stakes victories in Hackathons, Ideathons, and Pitching competitions.</p>
                </motion.div>

                <div className="achievements-grid">
                    {achievementsData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="achievement-icon">{item.icon}</div>
                            <div className="achievement-content">
                                <span className="achievement-location">{item.location}</span>
                                <h3 className="achievement-title">{item.title}</h3>
                                <p className="achievement-desc">{item.description}</p>
                            </div>
                            <div className="achievement-bg-number">0{index + 1}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery Section */}
                <motion.div
                    className="gallery-container"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h3 className="gallery-title">Moments of Victory</h3>
                    <div className="gallery-grid">
                        {galleryImages.map((src, idx) => (
                            <div key={idx} className={`gallery-item item-${idx}`}>
                                <img src={src} alt={`Achievement capture ${idx + 1}`} loading="lazy" />
                                <div className="gallery-overlay"></div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
