import React from 'react';
import textutils from '../assets/portfolio/textutils.jpg';
import news from '../assets/portfolio/news.jpg';
import productselling from '../assets/portfolio/productselling.jpg';

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: productselling
        },
        {
            id: 2,
            src: news
        },
        {
            id: 3,
            src: textutils
        },
    ];

    return (
        <div name='Portfolio' className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out my Portfolio</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {portfolio.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200'>Code</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div style={{ height: '50px' }}></div> {/* Add some space to separate sections */}
        </div>
    );
}

export default Portfolio;

