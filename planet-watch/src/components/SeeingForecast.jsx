function SeeingForecast () {
    return (
    <section className="forecast">
        <h2>Tonight's Seeing Forecast</h2>
        <div className="forecast-cards">
            <div className="forecast-box">
                <span>9 PM</span>
                <p>Seeing: 3/5</p>
                <p>Transparency: 4/5</p>
                <p>Clouds: 20%</p>
            </div>
            <div className="forecast-box">
                <span>12 AM</span>
                <p>Seeing: 4/5</p>
                <p>Transparency: 5/5</p>
                <p>Clouds: 5%</p>
            </div>
        </div>
    </section>
    );
}

export default SeeingForecast;