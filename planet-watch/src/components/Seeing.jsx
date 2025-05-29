function Seeing () {
    return (
        <section className="hero">
            <h2>Current Seeing Conditions</h2>
            <div className="conditions">
                <div className="condition-box">
                    <span>4/5</span>
                    Seeing Quality
                </div>
                <div className="condition-box">
                    <span>3/5</span>
                    Transparency
                </div>
                <div className="condition-box">
                    <span>10%</span>
                    Cloud Cover
                </div>
                <div className="condition-box">
                    <span>7 mph</span>
                    Wind Speed
                </div>
            </div>
        </section>
    );
}

export default Seeing;