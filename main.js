import React from 'react';
import {render} from 'react-dom';
import style from './scss/styles.scss';

const Test = React.createClass({
	render() {
		return <h1>Test test 1 2 1 2</h1>
	}
});

render(<Test />, document.getElementById('main'));