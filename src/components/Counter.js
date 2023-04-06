import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch=useDispatch()
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  const incrementHandler=()=>{
        dispatch({type:'increment'})
  }

  const decrementHandler=()=>{
    
    dispatch({type:'decrement'})
  }

  const increment5Handler=()=>{
    dispatch({type:'incrementby5'})
}

const decrement5Handler=()=>{

dispatch({type:'decrementby5'})
}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
