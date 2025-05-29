import { useParams } from 'react-router-dom';
import placeholder from '../assets/svg-placeholder.png'
import BackButton from './BackButton';
import PlanetTable from './PlanetTable';
import Seeing from './Seeing';
import SeeingForecast from './SeeingForecast';

function InfoPage () {
    const { lati, longi } = useParams();

    const latitude = parseFloat(lati);
    const longitude = parseFloat(longi);

    if (isNaN(latitude) || isNaN(longitude)) {
        return <p style={{ color: 'red' }}>Invalid coordinates in URL.</p>;
    }
    
    return (
        <div className="info-page">
            <header>
                <h1>Planet Watch</h1>
            </header>
            <main>
                <section>
                    <BackButton />
                </section>
                <div className='horizontal-container'>
                    <section>
                        <img src={placeholder} 
                        alt="Placeholder for star map or planet chart" 
                        height={500} 
                        width={500}
                        />
                    </section>
                    <section>
                        <PlanetTable latitude={latitude} longitude={longitude} elevation={300} />
                    </section>
                </div>
                <div className='horizontal-container'>
                    <section>
                        <Seeing />
                    </section>
                    <section>
                        <SeeingForecast />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default InfoPage;