import { useLocation } from "react-router-dom";

function CurrentLocation() {
    const location = useLocation();

    return (
        <h3>Current Path: {location.pathname}</h3>
    );
}

export default CurrentLocation;