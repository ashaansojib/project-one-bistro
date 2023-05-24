import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import FeaturedCard from '../cards/FeaturedCard';

const Featured = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                const featuredSalad = data.filter(item => item.category === 'salad');
                setFeatured(featuredSalad)
            })
    }, []);
    return (
        <div>
            <SectionTitle subHeading={'---should try---'} heading={'CHEF RECOMANDS'}></SectionTitle>
            <div className='grid grid-cols-3 gap-10'>
                {
                    featured.slice(0, 3).map(item => <FeaturedCard
                        key={item._id}
                        item={item}
                    ></FeaturedCard>)
                }
            </div>
        </div>
    );
};

export default Featured;