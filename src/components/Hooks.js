import {useState, useEffect, useCallback, useMemo, useReducer, useRef} from 'react';
import logo from "../logo.svg";
import {Button} from "antd";
import UseCallback from "./UseCallback";


const INCREMENT = 'increment';
const DECREMENT = 'decrement';


function calculate () {
    for(let i=0; i<1000000000; i++) {}
    window.console.log("calculate has been called");
    return 0;
}

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return {count: state.count + 1};
        case DECREMENT:
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Hooks() {
    const [counter, setCounter] =  useState(calculate);
    const [state, dispatch] = useReducer(reducer, initialState);
    const ref = useRef(0);
    const buttonRef = useRef(null);

    useEffect(() => {
        ref.current++;
        window.console.log("this will be called in every re-render!");
    });

    useEffect(() => {
        window.console.log("this will be called only first time the component mounts");
    }, []);

    useEffect(() => {
        window.console.log("this will be called every time counter changes");
        window.console.log("BTW your component has been re-rendered " + ref.current + " times");
        return () => {
            window.console.log("this will be called when component unmounts");
        }
    }, [counter]);


    const memoCalculation = useMemo(() => {
        const value = calculate();
        return state.count + value;
    }, [state.count])


    const callback = useCallback(() => {
        return state.count
    }, [state.count])


    return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <br/>
                <code>src/components/Hooks.js</code>
                <br/>
                <span>------useState-----</span>
                <br/>
                <span>
                    {counter}
                </span>
                <br/>
                <Button ref={buttonRef} onClick={() => setCounter((counter) => counter+1)}> increment </Button>
                <br/>
                <Button onClick={() => setCounter((counter) => counter-1)}> decrement </Button>

                <br/>
                <span onClick={() => {
                    buttonRef.current.click();
                }}>Trigger increment click by using useRef</span>
                <br/>
                <span>------useReducer-----</span>
                <br/>
                <span>
                    {state.count}
                </span>
                <br/>
                <Button onClick={() => dispatch({type: INCREMENT})}> increment </Button>
                <br/>
                <Button onClick={() => dispatch({type: DECREMENT})}> decrement </Button>
                <br/>
                <span>------useMemo-----</span>
                <br/>
                {memoCalculation}
                <br/>
                <UseCallback callback={callback}/>
            </p>
        </header>
    </div>)

}

export default Hooks;
