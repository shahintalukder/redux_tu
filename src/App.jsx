import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Counter from "./Counter";
import Stats from "./Stats";
import { increment, decrement } from "./features/counters/counterSlice.js";

function App() {
    const counters = useSelector(state => state.counters);

    const dispatch = useDispatch();

    const total = counters.reduce((sum, current) => {
        console.log(current);
        return sum + current.counter;
    }, 0);

    const handleIncrement = id => {
        dispatch(increment(id));
    };
    const handleDecrement = id => {
        dispatch(decrement(id));
    };

    return (
        <>
            {counters.map(el => (
                <Counter
                    handleIn={handleIncrement}
                    handleDe={handleDecrement}
                    key={el.id}
                    counterId={el.id}
                    counter={el.counter}
                />
            ))}

            <Stats counter={total} />
        </>
    );
}

export default App;
