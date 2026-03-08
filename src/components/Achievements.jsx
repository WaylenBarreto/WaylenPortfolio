import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
    {
        icon: <Trophy size={40} />,
        title: "Eureka Debate Win",
        location: "GEC 2025",
        description: "Secured first place in the highly competitive Eureka debate, demonstrating structured argumentation and public speaking excellence."
    },
    {
        icon: <Award size={40} />,
        title: "Pitch Paradox Winner",
        location: "PCCE Techyons",
        description: "Won the Pitch Paradox innovation challenge, pitching a unique and complex technological solution effectively under pressure."
    },
    {
        icon: <Star size={40} />,
        title: "3rd Place - Ideas 4.0",
        location: "2026 Innovation Summit",
        description: "Awarded for Trustbus: A Privacy-first AI designed to build ultra-reliable transport solutions."
    }
];

const galleryImages = [
    "/images/media__1772960551925.jpg",
    "/images/media__1772960914420.jpg",
    "/images/media__1772960914518.jpg",
    "/images/media__1772960914571.jpg",
    "/images/media__1772960914587.jpg"
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
                    <h2 className="section-title">Podium <span className="text-accent">Finishes</span></h2>
                    <p className="section-subtitle">A track record of high-stakes victories.</p>
                </motion.div>

                <div className="achievements-grid">
                    {achievementsData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
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
                    transition={{ duration: 0.8, delay: 0.8 }}
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
