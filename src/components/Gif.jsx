import React, { useState, useEffect } from 'react';

const Gif = () => {
    const [gifs, setGifs] = useState('');
    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=7FiX5q1NUx1SlbdnCiPsXkFk1qPVmvpQ')
        .then(res => res.json())
        .then(response => {
            setGifs(response.data)
        })
    }, [])
    console.log(gifs)
    return (
        <>
         {gifs.map(gif => {
            return(
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src={gif.url} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{gif.username}</h4>
                    </div>
                </div>
            </div>
            )
            })
        } 
        </>
    )
}

export default Gif;