import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './../store/counter';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = (value=1) => {
    // dispatch({ type: 'increment', payload: value });
    dispatch(counterActions.increment(value))
  }

  const decrementHandler = (value=1) => {
    dispatch(counterActions.decrement(value));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      { show && (
        <div>
          <button onClick={() => incrementHandler()}>Increment</button>
          <button onClick={() => incrementHandler(5)}>Increment by 5</button><br />
          <button onClick={() => decrementHandler()}>Decrement</button>
          <button onClick={() => decrementHandler(5)}>Decrement by 5</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/** starts the redux part
 * 
 * 
 * hello world
  const incrementHandler = (value=1) => {
    dispatch({ type: 'increment', payload: value });
  }

  const decrementHandler = (value=1) => {
    dispatch({ type: 'decrement', payload: value });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

*/

// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
