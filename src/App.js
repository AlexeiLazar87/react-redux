import './App.css';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return (
        <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => {
            dispatch({type: 'INC'})
        }}>Increment</button>
        <button onClick={() => {
            dispatch({type: 'DEC'})
        }}>Decrement</button>
        <button onClick={() => {
            dispatch({type: 'RESET'})
        }}>Reset</button>
        </>
    )
}

function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

export default App;
