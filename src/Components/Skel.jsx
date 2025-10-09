import React from 'react';

const Skel = ({count}) => {
    return (
        <>
            {Array.from({length: count}).map((_,i) => (
            <div key={i} className=" ">
                <div className="skeleton h-32 w-32"></div>
            </div>
            ))}
       
        </>
    );
};

export default Skel;