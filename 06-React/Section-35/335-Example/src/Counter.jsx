import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/actions/action';

function Counter() {
    const count = useSelector((state => state.count));
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count in Counter Component: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter;