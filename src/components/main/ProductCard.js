import React, { useState } from 'react';

const ProductCard = ({ prod }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className="mx-auto mt-11 w-36 md:w-48 xl:w-72 transform overflow-hidden shadow-md duration-300 hover:scale-105 cursor-pointer">
            <img className="h-48 md:h-60 xl:h-96 w-full object-cover object-center" src={prod.image} alt={prod.image} />
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium text-gray-900">
                    {prod.title.length > 10 ? prod.title.slice(0, 8) + "..." : prod.title}
                </h2>

                <div className="flex items-center mb-2">
                    <p className="text-sm text-gray-700">
                        {prod.description.length > 50 ? prod.description.slice(0, 50) + "..." : prod.description}
                    </p>
                    <svg
                        onClick={(e) => {
                            e.preventDefault(); 
                            toggleWishlist();
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isWishlisted ? 'red' : 'none'}
                        viewBox="0 0 24 24"
                        stroke={isWishlisted ? 'red' : 'currentColor'}
                        className="w-5 h-5 text-gray-900 ml-2 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.172 5.172a4.001 4.001 0 015.656 0L12 8.344l3.172-3.172a4.001 4.001 0 115.656 5.656l-8.25 8.25a.75.75 0 01-1.06 0l-8.25-8.25a4.001 4.001 0 010-5.656z"
                        />
                    </svg>
                </div>

                <div className="flex justify-between items-center">
                    <p className="mr-2 text-sm font-medium text-blue-500">${prod.price}</p>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-purple-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l2.29 6.635h6.97l-5.636 4.09 2.17 6.69-5.793-4.14-5.793 4.14 2.17-6.69-5.636-4.09h6.97z"/>
                        </svg>
                        <p className="text-sm font-medium text-purple-500">{prod.rating?.rate || 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
