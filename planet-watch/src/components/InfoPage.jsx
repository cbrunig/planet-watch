import placeholder from '../assets/svg-placeholder.png'

function InfoPage () {
    return (
        <div>
            <header>
                <h1>Planet Watch</h1>
                <br />
                <div>
                    <img src={placeholder} alt="Map placeholder" height='500px' width='500px'/>
                </div>
                <ul>
                    <li>Planet 1</li>
                    <li>Planet 2</li>
                    <li>Planet 3</li>
                </ul>
            </header>
        </div>
    );
}

// TODO: change ul to table for ease of displaying more data

export default InfoPage;