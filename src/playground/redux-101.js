import {createStore} from 'redux';


// Action generators - functions that return action objects

// const add = ({a, b}, c) => {
//     return a + b + c;
// };

// console.log(add({a: 1 ,b: 12}, 100));


const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT', 
        incrementBy
    };
};
 
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT", 
    decrementBy
});

// setCount
const setCount = ({set}) => ({
    type: 'SET', 
    set
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducrers are pure functions
// 2. Newver change state or action

let result;
const add = (a, b) => {
    result =  a + b;
};


const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT": 
            return {
                count: state.count - action.decrementBy
            }
        case "SET": 
            return {
                count: action.set
        }
        case "RESET": {
            return {
                count: 0
            }
        }
        default: 
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

// 

store.dispatch(incrementCount({incrementBy: 5}));

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({set: 1000}));
