import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuCard from '../../cards/MenuCard';

const MenuList = () => {
    const [menu, setMenu] = useState([])
    useEffect( ()=> {
        fetch('/Menu.json')
        .then( res => res.json())
        .then( data => setMenu(data))
    }, [])
    return (
        <>
            <SectionTitle heading={'From Our Menu'} subHeading={'---Check It Now---'}></SectionTitle>
            <div className='grid grid-cols-2 gap-6'>
                {
                    menu.slice(0, 10).map( menu => <MenuCard 
                        key={menu._id}
                        menu={menu}
                    ></MenuCard>)
                }
            </div>
        </>
    );
};

export default MenuList;