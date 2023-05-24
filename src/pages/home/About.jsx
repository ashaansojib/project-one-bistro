import React from 'react';
import './About.css'
import SectionTitle from '../../components/sectionTitle/SectionTitle';
const About = () => {
    return (
        <div className="hero about bg-cover my-10 lg:h-[550px]">
            <div className="hero-overlay bg-opacity-60"></div>
                <SectionTitle heading={'From Our Menu'} subHeading={'---check it out---'}></SectionTitle>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2>left</h2>
                    </div>
                    <div>
                        <h2>rigth</h2>
                    </div>
                </div>
        </div>
    );
};

export default About;