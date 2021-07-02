const redux = require('redux');


const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            action: action.type,
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            action: action.type,
            counter: state.counter - 1
        };
    }
    return state;
};

const store = redux.createStore(counterReducer);
console.log(store.getState())

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState, "counter");
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

//another reducer starts


const waiterReducer = (state = { waiter: 6 }, action) => {
    if (action.type === "data") {
        return {
            action: action.type,
            waiter: state.waiter - 1
        }
    }
}

const store1 = redux.createStore(waiterReducer);

const waiterSubscriber = () => {
    const latestState = store1.getState();
    console.log(latestState, "waiter");
}

store1.subscribe(waiterSubscriber);

store1.dispatch({ type: 'data' });
store1.dispatch({ type: 'data' });
store1.dispatch({ type: 'data' });