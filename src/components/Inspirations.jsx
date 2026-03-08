import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Inspirations.css';

const inspirationsData = [
    {
        name: "Max Verstappen",
        title: "Mentality",
        description: "Unrelenting drive and fierce competitiveness. A champion's mindset focused only on winning and pushing the absolute limits.",
        image: "/images/max_verstappen_mentality_1772962736595.png"
    },
    {
        name: "Cristiano Ronaldo",
        title: "Work Ethic",
        description: "The epitome of discipline and consistency. Proving that elite talent must always be matched with unparalleled hard work.",
        image: "/images/cristiano_ronaldo_work_ethic_1772962753318.png"
    },
    {
        name: "Toto Wolff",
        title: "Leadership",
        description: "Fostering a no-blame culture while setting uncompromising standards. True leadership through accountability and vision.",
        image: "/images/toto_wolff_leadership_1772962770713.png"
    }
];

const Inspirations = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="inspirations" className="inspirations-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="inspirations-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Core <span className="text-accent">Inspirations</span></h2>
                    <p className="section-subtitle">Figures who shape my approach to engineering and life.</p>
                </motion.div>

                <div className="inspirations-grid">
                    {inspirationsData.map((person, index) => (
                        <motion.div
                            key={index}
                            className="inspiration-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="inspiration-image-wrapper">
                                <img src={person.image} alt={`${person.name} - ${person.title}`} className="inspiration-image" />
                                <div className="inspiration-overlay">
                                    <h3 className="inspiration-title">{person.title}</h3>
                                </div>
                            </div>
                            <div className="inspiration-content">
                                <h4 className="inspiration-name">{person.name}</h4>
                                <p className="inspiration-desc">{person.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Inspirations;
