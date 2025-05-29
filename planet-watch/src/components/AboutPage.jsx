import BackButton from "./BackButton";

function AboutPage() {
    return (
        <div className="about-page">
            <header>
                <h1>About Planet Watch</h1>
            </header>
            <section>
                <p>
                    <strong>Planet Watch</strong> is an astronomy web app that helps you find out which planets are visible in the night sky
                    from your location. Enter your latitude and longitude, and get instant data on planetary positions, visibility, and more.
                </p>
                <p>
                    This app uses the open-source <a href="https://www.npmjs.com/package/astronomy-engine" target="_blank" rel="noopener noreferrer">Astronomy Engine</a> library to calculate real-time astronomical data, including:
                </p>
                <ul className="indented-list">
                    <li>Right Ascension and Declination</li>
                    <li>Azimuth and Altitude (for visibility)</li>
                    <li>Dynamic forecasts of seeing conditions</li>
                </ul>
                <p>
                    Whether you're an amateur stargazer or planning a night of observation, Planet Watch gives you the essential info you need to look up!
                </p>
            </section>
            <section>
                <p className="back">
                    <BackButton />
                </p> 
            </section>
            <footer style={{ marginTop: '2rem' }}>
                <p>Built with ❤️ by an astronomy enthusiast. </p>
            </footer>
        </div>
    );
}

export default AboutPage;