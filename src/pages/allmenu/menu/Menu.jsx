import React from 'react';
import MenuBanner from '../banner/MenuBanner';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import SaladMenu from '../SaladMenu/SaladMenu';

const Menu = () => {
    return (
        <div>
            <MenuBanner></MenuBanner>
            <SectionTitle heading="Today's Offer" subHeading="---Don't Miss---"></SectionTitle>
            {/* this is salad menu section */}
            <div className='grid grid-cols-2 gap-6 mb-4'>
                <SaladMenu></SaladMenu>
                <SaladMenu></SaladMenu>
                <SaladMenu></SaladMenu>
            </div>
        </div>
    );
};

export default Menu;