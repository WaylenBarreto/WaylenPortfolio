import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Mic, Lightbulb } from 'lucide-react';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <section id="about" className="about-section">
            <div className="container about-container" ref={ref}>
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Drive & Vision</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text-column"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="lead-text">
                            I am <span className="text-accent">Waylen Barreto</span>, a Full-Stack Developer and avid Debater specializing in turning complex ideas into scalable, privacy-first software solutions.
                        </p>
                        <p>
                            I thrive in high-pressure environments, whether that means architecting a rapid MERN stack solution at a hackathon or articulating arguments on a debate stage. My approach combines logic, user-centric design, and relentless execution to create applications that truly matter.
                        </p>
                        <p>
                            When I'm not coding projects like Trustbus or Resolve360, I'm analyzing the next big shift in tech paradigms or refining my public speaking capabilities. With my core motto being <strong>"Never give up"</strong>, I consistently push through challenges to deliver excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-features"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Code size={32} />
                            </div>
                            <div className="feature-info">
                                <h3>Full-Stack Engineer</h3>
                                <p>MERN stack, scalable backends, interactive UX, and AI integration.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Mic size={32} />
                            </div>
                            <div className="feature-info">
                                <h3>Debater</h3>
                                <p>Articulate communicator, structuring logical arguments and public speaking.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Lightbulb size={32} />
                            </div>
                            <div className="feature-info">
                                <h3>Innovator</h3>
                                <p>Award-winning hackathon participant building solutions for transport & society.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
