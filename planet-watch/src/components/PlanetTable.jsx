import { useEffect, useState } from "react";
import * as Astronomy from "astronomy-engine";

const bodies = [
  Astronomy.Body.Sun,
  Astronomy.Body.Moon,
  Astronomy.Body.Mercury,
  Astronomy.Body.Venus,
  Astronomy.Body.Mars,
  Astronomy.Body.Jupiter,
  Astronomy.Body.Saturn,
  Astronomy.Body.Uranus,
  Astronomy.Body.Neptune,
  Astronomy.Body.Pluto
];

function PlanetTable({ latitude, longitude, elevation = 0 }) {
  const [planetData, setPlanetData] = useState([]);

  const latNum = parseFloat(latitude);
  const lonNum = parseFloat(longitude);

  const isValid = !isNaN(latNum) && !isNaN(lonNum) &&
    latNum >= -90 && latNum <= 90 &&
    lonNum >= -180 && lonNum <= 180;

  useEffect(() => {
    if (!isValid) {
        console.log("Invalid coordinates");
        return;
    }

    console.log("Fetching planet data for", latNum, lonNum);

    const observer = new Astronomy.Observer(latNum, lonNum, elevation);
    const now = new Date();

    const data = bodies.map(body => {
      try {
        const equ = Astronomy.Equator(body, now, observer, true, false);
        const hor = Astronomy.Horizon(now, observer, equ.ra, equ.dec, false);
        return {
          name: Astronomy.Body[body],  // Convert enum to name
          ra: equ.ra.toFixed(2),
          dec: equ.dec.toFixed(2),
          azimuth: hor.azimuth.toFixed(2),
          altitude: hor.altitude.toFixed(2),
          visible: hor.altitude > 0
        };
      } catch (e) {
        console.log(`Error processing ${body}:`, e);
        return {
          name: Astronomy.Body[body],
          ra: "-",
          dec: "-",
          azimuth: "-",
          altitude: "-",
          visible: false
        };
      }
    });

    console.log("Generated planet data:", data);
    setPlanetData(data);
  }, [latNum, lonNum, elevation, isValid]);

  if (!isValid) {
    return <p style={{ color: "red" }}>Invalid coordinates for planet data.</p>;
  }

  return (
    <div className="planet-table">
      <h2>Visible Planets</h2>
      <table>
        <thead>
          <tr>
            <th>Body</th>
            <th>RA</th>
            <th>DEC</th>
            <th>Azimuth</th>
            <th>Altitude</th>
          </tr>
        </thead>
        <tbody>
          {planetData.filter(body => body.visible).map((body, index) => (
            <tr key={index}>
              <td>{body.name}</td>
              <td>{body.ra}</td>
              <td>{body.dec}</td>
              <td>{body.azimuth}</td>
              <td>{body.altitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetTable;