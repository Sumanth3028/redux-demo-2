import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/redux";
const Counter = () => {
  const dispatch=useDispatch()
  const counter = useSelector((state) => state.counter.counter);
  const counter2 = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler=()=>{
        dispatch(counterActions.increment())
  }

  const decrementHandler=()=>{
    
    dispatch(counterActions.decrement())
  }

  const increment5Handler=()=>{
    dispatch(counterActions.incrementby5(5))
}

const decrement5Handler=()=>{

dispatch(counterActions.decrementby5(5))
}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counter2 &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increment5Handler}>Incrementby5</button>
        <button onClick={decrement5Handler}>decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
