import { useSelector } from "react-redux";

function Display() {
    const count = useSelector((state) => state.count);

    return (
        <div>
            <h2>Current Count from Display: {count}</h2>
        </div>
    );
}

export default Display;