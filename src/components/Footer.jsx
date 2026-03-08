import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <footer id="contact" className="footer-section">
            <div className="container footer-container" ref={ref}>
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="footer-header">
                        <h2 className="footer-title">Let's <span className="text-accent">Connect</span></h2>
                        <p className="footer-subtitle">Open for new opportunities, hackathons, and collaborations.</p>
                    </div>

                    <div className="contact-grid">
                        <a href="mailto:waylenbarreto@gmail.com" className="contact-card">
                            <div className="contact-icon bg-red">
                                <Mail size={24} />
                            </div>
                            <div className="contact-info">
                                <h3>Email</h3>
                                <p>waylenbarreto@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://wa.me/919359611406" target="_blank" rel="noreferrer" className="contact-card">
                            <div className="contact-icon bg-blue">
                                <Phone size={24} />
                            </div>
                            <div className="contact-info">
                                <h3>WhatsApp</h3>
                                <p>+91 9359611406</p>
                            </div>
                        </a>

                        <a href="https://github.com/WaylenBarreto" target="_blank" rel="noreferrer" className="contact-card">
                            <div className="contact-icon bg-dark">
                                <Github size={24} />
                            </div>
                            <div className="contact-info">
                                <h3>GitHub</h3>
                                <p>Projects & Code</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/waylen-barreto-355807273/" target="_blank" rel="noreferrer" className="contact-card">
                            <div className="contact-icon bg-blue">
                                <Linkedin size={24} />
                            </div>
                            <div className="contact-info">
                                <h3>LinkedIn</h3>
                                <p>Professional Network</p>
                            </div>
                        </a>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2026 Waylen Barreto. All rights reserved.</p>
                        <div className="footer-deco">
                            <span>W</span><span className="text-accent">B</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
