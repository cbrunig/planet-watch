import placeholder from '../assets/svg-placeholder.png'
import BackButton from './BackButton';
import PlanetTable from './PlanetTable';
import Seeing from './Seeing';
import SeeingForecast from './SeeingForecast';

function InfoPage () {
    return (
        <div className="info-page">
            <header>
                <h1>Planet Watch</h1>
            </header>
            <main>
                <section>
                    <BackButton />
                </section>
                <section>
                    <img src={placeholder} alt="Placeholder for star map or planet chart" height={500} width={500} />
                </section>
                <section>
                    <PlanetTable />
                </section>
                <section>
                    <Seeing />
                </section>
                <section>
                    <SeeingForecast />
                </section>
            </main>
        </div>
    );
}

export default InfoPage;