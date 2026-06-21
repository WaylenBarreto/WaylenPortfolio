import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
    // Hackathons (1 to 4)
    {
        icon: <Trophy size={40} />,
        title: "1st Place - Technix Hackathon",
        location: "GEC 2026",
        category: "Hackathon",
        place: 1,
        description: "Secured the top spot at the Technix Hackathon held at Goa College of Engineering, showcasing rapid prototyping and system design."
    },
    {
        icon: <Trophy size={40} />,
        title: "1st Place - Aavishkar Hackathon",
        location: "PCCE 2026",
        category: "Hackathon",
        place: 1,
        description: "Secured first place at the Aavishkar Hackathon 2026, building innovative solutions and presenting to industry judges."
    },
    {
        icon: <Trophy size={40} />,
        title: "2nd Place - Odyssey Hackathon",
        location: "PCCE 2026",
        category: "Hackathon",
        place: 2,
        description: "Podium finish at the Odyssey National Level Hackathon, competing against top teams across the country."
    },
    {
        icon: <Star size={40} />,
        title: "2nd Place - YBIT Hackathon",
        location: "Sawantwadi 2026",
        category: "Hackathon",
        place: 2,
        description: "Recognized for excellence in full-stack development and problem-solving at the YBIT Hackathon."
    },
    // Ideathons (5 to 9)
    {
        icon: <Award size={40} />,
        title: "1st Place - AI Track",
        location: "BITS Hyderabad 2026",
        category: "Ideathon",
        place: 1,
        description: "Winner of the AI track at BITS Pilani Hyderabad, developing cutting-edge artificial intelligence solutions."
    },
    {
        icon: <Award size={40} />,
        title: "1st Place - Technix Ideathon",
        location: "GEC 2026",
        category: "Ideathon",
        place: 1,
        description: "Awarded first place at the Technix Ideathon for outstanding innovation and technical viability."
    },
    {
        icon: <Award size={40} />,
        title: "1st Place - Techyon Ideathon",
        location: "PCCE 2025",
        category: "Ideathon",
        place: 1,
        description: "Won first place at the Techyon Ideathon hosted by the IT Department, PCCE, presenting robust tech concepts."
    },
    {
        icon: <Trophy size={40} />,
        title: "2nd Place - Techurja 2026",
        location: "AIEM 2026",
        category: "Ideathon",
        place: 2,
        description: "Podium finish at the AIEM Techurja pitching competition, presenting technical innovations to a panel of experts."
    },
    {
        icon: <Trophy size={40} />,
        title: "3rd Place - Ideas 4.0",
        location: "PCCE 2026",
        category: "Ideathon",
        place: 3,
        description: "Awarded for Trustbus: A Privacy-first AI designed to build ultra-reliable transport solutions."
    }
];

const galleryImages = [
    "/images/aavishkar_2026.jpg",
    "/images/techurja_ideathon_2026.jpg",
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

    const [activeImageIndex, setActiveImageIndex] = useState(null);

    const openLightbox = (index) => {
        setActiveImageIndex(index);
    };

    const closeLightbox = () => {
        setActiveImageIndex(null);
    };

    const showPrevImage = (e) => {
        e.stopPropagation();
        setActiveImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        setActiveImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') {
                setActiveImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
            }
            if (e.key === 'ArrowRight') {
                setActiveImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeImageIndex]);

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
                        <span className="stat-item">4x Hackathon Winner</span>
                        <span className="stat-divider">|</span>
                        <span className="stat-item">5x Ideathon Winner</span>
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
                            whileHover={{ y: -10 }}
                        >
                            <div className="achievement-icon">{item.icon}</div>
                            <div className="achievement-content">
                                <div className="achievement-badges">
                                    <span className="achievement-location">{item.location}</span>
                                    <span className={`achievement-category ${item.category.toLowerCase()}`}>
                                        {item.category}
                                    </span>
                                </div>
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
                            <div 
                                key={idx} 
                                className={`gallery-item item-${idx}`}
                                onClick={() => openLightbox(idx)}
                            >
                                <img src={src} alt={`Achievement capture ${idx + 1}`} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="gallery-zoom-text">View Full Image</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {activeImageIndex !== null && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">&times;</button>
                            <button className="lightbox-prev" onClick={showPrevImage} aria-label="Previous image">&#10094;</button>
                            <img src={galleryImages[activeImageIndex]} alt="Expanded victory capture" className="lightbox-image" />
                            <button className="lightbox-next" onClick={showNextImage} aria-label="Next image">&#10095;</button>
                            <div className="lightbox-caption">
                                Image {activeImageIndex + 1} of {galleryImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Achievements;
