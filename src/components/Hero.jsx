import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay"></div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-eyebrow">
                        <span className="line"></span>
                        PORTFOLIO 2026
                    </div>
                    <h1 className="hero-title">
                        <span className="text-light">WAYLEN</span><br />
                        <span className="text-bold">BARRETO</span>
                    </h1>
                    <p className="hero-subtitle">
                        Full-Stack Developer | AI Enthusiast | AI Developer | IoT Builder | Engineering Student
                        <br />
                        Building solutions for real-world problems.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">
                            View Work <ArrowRight className="btn-icon" size={20} />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Get in Touch
                        </a>
                    </div>
                </motion.div>

                {/* Massive Profile Image on the right */}
                <motion.div
                    className="hero-large-image-wrapper"
                    initial={{ scale: 0.9, opacity: 0, x: 50 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <motion.img
                        src="/images/profile_pic.jpg"
                        alt="Waylen Barreto"
                        className="hero-large-profile"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="racing-stripe primary"></div>
                    <div className="racing-stripe secondary"></div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <a href="#about">
                    <ChevronDown size={32} color="var(--accent-red)" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
