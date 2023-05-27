import React from 'react';

const MenuCard = ({ menu }) => {
    const { name, image, recipe, price } = menu;
    return (
        <div className='flex gap-4 items-center border'>
            <div>
                <img  className='w-20 h-20' src={image} alt="" />
            </div>
            <div>
                <div className='flex justify-between w-full'>
                    <h2 className='text-2xl'>{name} -------</h2>
                    <p className='text-orange-600 text-xl'>{price}</p>

                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuCard;