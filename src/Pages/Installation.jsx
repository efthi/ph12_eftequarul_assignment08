import React, { useEffect, useState } from 'react';
import {formatDownloads} from '../utilis/custom';
import { ToastContainer, toast } from 'react-toastify';

const Installation = () => {
    const [installed, setInstalled] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect( () => {
        const savedApps =  JSON.parse(localStorage.getItem('applist'))
        if(savedApps) setInstalled(savedApps)
    }, []);
    
    const sortItem = (() => {
        if(sortOrder === 'size-asc'){
            return [...installed].sort((a,b) => a.downloads - b.downloads);
        }
        else if(sortOrder === 'size-desc'){
            return [...installed].sort((a,b)=>b.downloads - a.downloads);
        }
        else {
            return installed;
        }
    })()
    
    const removeApps = (id) => {
        const currentApps = JSON.parse(localStorage.getItem('applist'))
        let updateList = currentApps.filter(p => p.id !== id);
        setInstalled(updateList);
        localStorage.setItem('applist', JSON.stringify(updateList));
        toast.warning('App Removed!');
    }

    return (
        <>
        <div>
            <h1 className='text-center text-6xl text-black font-bold mt-10'>Your Installed Apps</h1>
            <h3 className='text-center text-2xl text-gray-500 mt-5 mb-10'>
                Explore All Trending Apps on the Market developed by us</h3>
        </div>
        <div className='mx-auto flex flex-col md:flex-row justify-between max-w-10/12 mb-5'>
            <p><span className="badge badge-primary">{installed.length} </span> Apps Installed</p>
            <label className="form-control w-full max-w-xs">
                <select className='select select-bordered' value={sortOrder} onChange={e=> setSortOrder(e.target.value)}>
                    <option value='none'>Sort by Size</option>
                    <option value='size-asc'>Low &gt; High</option>
                    <option value="size-desc">High &gt; Low</option>
                </select>
            </label>
        </div>
        <div className="mx-auto flex flex-col max-w-10/12 m-2">
            <p className={`text-center font-semibold text-3xl m-5 ${installed.length ? "hidden" : ""}`}>No App Installed!</p>
            {sortItem.map(p => 
                <div key={p.id} className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src={p.image}
                    alt={p.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{p.title}</h2>
                    <p><span> ⬇️ {formatDownloads(p.downloads)}</span>
                    <span> ⭐ {p.ratingAvg}</span></p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>removeApps(p.id)} className="btn btn-success">Uninstall</button>
                    </div>
                </div>
            </div>
                
            )}
        </div>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            theme="colored"
            
        />

        </>
    );
};

export default Installation;