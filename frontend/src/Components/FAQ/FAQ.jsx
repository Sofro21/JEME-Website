import React from 'react';
import './FAQ.css';

const FAQ = () => {
    const faqData = [
        { question: 'Question 1', answer: 'Answer 1' },
        { question: 'Question 2', answer: 'Answer 2' },
        { question: 'Question 3', answer: 'Answer 3' },
        // Add more questions and answers as needed
    ];

    return (
        <div className='faq'>
            <h2 className='faq-title'>Frequently Asked Questions</h2>
            {faqData.map((faq, index) => (
                <div key={index} className='faq-questions'>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;