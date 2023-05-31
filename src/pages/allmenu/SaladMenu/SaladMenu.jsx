import React from 'react';

const SaladMenu = () => {
    return (
        <div className='flex gap-4 items-center border'>
            <div>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbfSd_jjt2K6zoUlPxNunAhfHe_f3O5aCiQ&usqp=CAU" alt="" />
            </div>
            <div>
                <div className='flex justify-between w-full'>
                    <h2 className='text-2xl'>Escalope de Veau -------</h2>
                    <p className='text-orange-600 text-xl'>50.5</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae repellat sequi earum harum neque.</p>
            </div>
        </div>
    );
};

export default SaladMenu;