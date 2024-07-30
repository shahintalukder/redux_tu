import React from "react";
import Button from "./Button";

export default function Counter({ counter, counterId, handleIn, handleDe }) {
    return (
        <div>
            <h2 className="text-title">Count: {counter}</h2>

            <Button onClick={() => handleIn(counterId)}>Increment</Button>
            <Button onClick={() => handleDe(counterId)}>Decrement</Button>
        </div>
    );
}
