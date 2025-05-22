import { Link } from "react-router-dom";

function BackButton () {
    return (
        <div>
            <Link to='/'>
                <button type="button">Change Location</button>
            </Link>
        </div>
    );
}

export default BackButton;