import React from 'react';

//loading spinner for data load
const Spinner = () => {
    return (
        <>
        <div className='mx-auto max-w-10/12'>
            <span className="loading loading-bars loading-xl m-30 text-center bg-amber-500"></span>
        </div>
        </>
    );
};

export default Spinner;