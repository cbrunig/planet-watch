import placeholder from '../assets/svg-placeholder.png'

function InfoPage () {
    return (
        <div>
            <header>
                <h1>Planet Watch</h1>
            </header>
                <div>
                    <img src={placeholder} alt="Map placeholder" height='500px' width='500px'/>
                </div>
                <table>
                    <tr>
                        <th>Planet</th>
                        <th>Magnitude</th>
                        <th>RA</th>
                        <th>Declination</th>
                        <th>Altitude</th>
                        <th>Direction</th>
                    </tr>
                    <tr>
                        <th>Jupiter</th>
                        <th>-1.9</th>
                        <th>05h 40m 37s</th>
                        <th>+23° 09' 44"</th>
                        <th>63.0°</th>
                        <th>South-West</th>
                    </tr>
                    <tr>
                        <th>Mars</th>
                        <th>1.1</th>
                        <th>09h 12m 55s</th>
                        <th>+17° 48' 58"</th>
                        <th>58.7°</th>
                        <th>South-East</th>
                    </tr>
                </table>
        </div>
    );
}

export default InfoPage;