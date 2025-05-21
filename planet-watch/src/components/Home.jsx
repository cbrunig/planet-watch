import { Link } from "react-router";

function Home () {
    return (
        <div>
            <header>
                <h1>Planet Watch</h1>
            </header>
            <main>
                <section>
                    <label for="latitude">
                        Latitude:  
                        <input type='text' id='latitude' name="latitude"></input>
                    </label>
                </section>
                <section>
                    <label for="longitude">
                        Longitude:  
                        <input type='text' id='longitude' name="longitude"></input>
                    </label>
                </section>
                <br />
                <Link to="/location/:cityName">
                    <button type="button">Let's go!</button>
                </Link>
            </main>
        </div>
    );
}

export default Home;