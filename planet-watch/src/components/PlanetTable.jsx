function PlanetTable  () {
    return (
        <table>
            <thead>
                <tr>
                    <th>Planet</th>
                    <th>Magnitude</th>
                    <th>RA</th>
                    <th>Declination</th>
                    <th>Altitude</th>
                    <th>Direction</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jupiter</td>
                    <td>-1.9</td>
                    <td>05h 40m 37s</td>
                    <td>+23° 09' 44"</td>
                    <td>63.0°</td>
                    <td>South-West</td>
                </tr>
                <tr>
                    <td>Mars</td>
                    <td>1.1</td>
                    <td>09h 12m 55s</td>
                    <td>+17° 48' 58"</td>
                    <td>58.7°</td>
                    <td>South-East</td>
                </tr>
            </tbody>
        </table>
    );
}

export default PlanetTable;