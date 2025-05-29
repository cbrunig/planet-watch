import { useState } from "react";
import { Link } from "react-router-dom";

function Home () {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    
    const isValid = isValidLatLon(latitude, longitude);

    function isValidLatLon(lat, lon) {
        const latNum = parseFloat(lat);
        const lonNum = parseFloat(lon);

        return (
            !isNaN(latNum) &&
            !isNaN(lonNum) &&
            latNum >= -90 &&
            latNum <= 90 &&
            lonNum >= -180 &&
            lonNum <= 180
        );
    }


    return (
        <div>
            <header>
                <h1>Planet Watch</h1>
            </header>
            <main>
                <section>
                    <label htmlFor="latitude">
                        Latitude: <input 
                            type='text' 
                            id='latitude' 
                            name="latitude" 
                            value={latitude} 
                            onChange={e => setLatitude(e.target.value)} />
                    </label>
                </section>
                
                <section>
                    <label htmlFor="longitude">
                        Longitude: <input 
                            type='text' 
                            id='longitude' 
                            name="longitude" 
                            value={longitude} 
                            onChange={e => setLongitude(e.target.value)} />
                    </label>
                </section>

                <br />

                {!isValid && (latitude || longitude) && (
                    <p style={{ color: 'red' }}>
                        Please enter valid coordinates. Latitude must be between -90 and 90, longitude between -180 and 180.
                    </p>
                )}

                <div className="button-wrapper">
                    {isValid ? (
                        <Link to={`/${latitude}/${longitude}`}>
                            <button type="button">Let's go!</button>
                        </Link>
                        ) : (
                            <button type="button" disabled>Let's go!</button>
                    )}
                </div>
                
                <div className="button-wrapper">
                    <Link to="https://www.latlong.net/" target="_blank">
                        <button type="button">Need help finding coordinates?</button>
                    </Link>
                </div>
            
                <div className="button-wrapper">
                    <Link to="/about">
                        <button type="button">About Planet Watch</button>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Home;