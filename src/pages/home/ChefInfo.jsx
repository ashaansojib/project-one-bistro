import React from 'react';
import './Chefinfo.css'
const ChefInfo = () => {
    return (
        <div className='chefInfo md:h-[400px] bg-cover p-4 mb-8  flex flex-col justify-center items-center'>
            <div className='bg-white p-8 text-center rounded-lg bg-opacity-70 w-[700px]'>
                <h2 className='text-3xl font-bold text-orange-500'>Bistro Boss</h2>
                <p className='mt-4 text-xl text-sky-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, exercitationem, neque nobis repellat aliquid ex ullam fugit optio, facilis odit sequi eum inventore dicta porro non modi veniam explicabo blanditiis pariatur quidem sapiente veritatis ut doloribus? Ex aut quis architecto, consectetur ipsum eveniet minima deserunt quasi obcaecati saepe officia soluta?</p>
            </div>
        </div>
    );
};

export default ChefInfo;