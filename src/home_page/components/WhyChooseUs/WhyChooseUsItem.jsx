import React from 'react';

const WhyChooseUsItem = ({ item }) => {
    return (
        <div className="max-w-lg bg-none border border-gray-200 rounded-lg shadow">
            <div className="flex justify-center">
                <a href={item.link}>
                    <img className="py-10 rounded-lg w-24" src={item.src} alt={item.alt} />
                </a>
            </div>
            <div className="p-5 text-center">
                <a href={item.link}>
                    <h5 className="mb-2 text-2xl text-green-500 tracking-tight text-center">
                        {item.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{item.description}</p>
            </div>
        </div>
    );
};

export default WhyChooseUsItem;