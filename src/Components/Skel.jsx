import React from 'react';

//Showing loading animation when apps load
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