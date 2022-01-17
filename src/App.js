import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from "react";

const Counter = () => {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const [value, setValue] = useState(10);
    return (
        <>
            <h1>Counter: {counter}</h1>
            <input type={"number"} value={value} onChange={({target: { value }}) => {
                setValue(value)
            }}/>
            <button onClick={() => {
                dispatch({type: 'INC_CUSTOM', payload: Number(value)})
            }}>Increment_Custom
            </button>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }}>Increment
            </button>
            <button onClick={() => {
                dispatch({type: 'DEC'})
            }}>Decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'RESET'})
            }}>Reset
            </button>
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
