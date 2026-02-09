import React from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: 'What is Kingdom Alive?',
            answer: 'Kingdom Alive is an engaging platform that connects individuals with various activities and resources.'
        },
        {
            question: 'How can I participate?',
            answer: 'You can participate by signing up on our website and choosing activities that interest you.'
        },
        {
            question: 'Is there a fee to join?',
            answer: 'Currently, joining is free for all users.'
        }
    ];

    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;