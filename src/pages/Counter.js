
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, ent, val } from '../redux/actions';

const Counter = () => {

  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input 
          type="text" 
          onChange={(e) => dispatch(val(e.target.value))}
        />
        <button
          onClick={() => dispatch(ent())}
        >
          Enter
        </button>
        <button
          onClick={() => dispatch(inc())}
        >
          Increment
        </button>
        <span style={{margin: 10}}>{counter}</span>
        <button
          onClick={() => dispatch(dec())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;