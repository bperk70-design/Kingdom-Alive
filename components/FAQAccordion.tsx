import React, { useState } from 'react';

const FAQAccordion = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const faqItems = [
        { question: 'What is Kingdom Alive?', answer: 'Kingdom Alive is a community-driven project aimed at...' },
        { question: 'How can I participate?', answer: 'You can participate by...' },
        { question: 'Where can I find more information?', answer: 'More information can be found on our website...' }
    ];

    const toggleItem = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="faq-accordion">
            {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleItem(index)}>
                        {item.question}
                    </div>
                    {expandedIndex === index && (
                        <div className="faq-answer">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;