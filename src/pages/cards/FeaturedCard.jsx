import React from 'react';

const FeaturedCard = ({item}) => {
    const {image, name, recipe} = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn border-b-2 border-b-orange-600">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;