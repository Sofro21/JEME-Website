import React from 'react';
import './ServiceSection.css';

const ServiceSection = () => {
    const services = [
        { title: 'Service 1', description: 'Description of Service 1' },
        { title: 'Service 2', description: 'Description of Service 2' },
        { title: 'Service 3', description: 'Description of Service 3' },
    ];

    return (
        <section className='services'>
            <h2>Our Services</h2>
            {services.map((service, index) => (
                <div key={index} className='service'>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </section>
    );
};

export default ServiceSection;