import placeholder from '../assets/svg-placeholder.png'
import PlanetTable from './PlanetTable';

function InfoPage () {
    return (
        <div>
            <header>
                <h1>Planet Watch</h1>
            </header>
                <div>
                    <img src={placeholder} alt="Map placeholder" height='500px' width='500px'/>
                </div>
                <PlanetTable />
        </div>
    );
}

export default InfoPage;