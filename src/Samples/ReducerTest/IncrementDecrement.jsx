import React, { useState, Fragment } from 'react';

const Display = (props) => <h1>Counter value : {props.counter}</h1>;
const Increment = (props) => <button style={{marginRight:5}} onClick={() => props.addToCounter(1)}>Increment</button>;
const Decrement = (props) => <button onClick={() => props.addToCounter(-1)}>Decrement</button>;

const IncrementDecrement = props => {
	const [count, setCount] = useState(0);
	const addToCounter = (value) => setCount(count + value);
	return <Fragment>
		<h1>Hooks</h1>
		<Display counter={count} />
		<Increment addToCounter={addToCounter} />
		<Decrement addToCounter={addToCounter} />
	</Fragment>

};
export default IncrementDecrement
