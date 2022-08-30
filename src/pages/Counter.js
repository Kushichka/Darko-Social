import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from '../redux/actions';

const Counter = () => {

  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(inc())}
        >
          Increment
        </button>
        <span>{counter}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(dec())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;