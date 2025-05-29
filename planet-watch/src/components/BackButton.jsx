import { Link } from "react-router-dom";

function BackButton () {
    return (
        <div className="back">
            <Link to='/'>
                <button type="button">Back</button>
            </Link>
        </div>
    );
}

export default BackButton;