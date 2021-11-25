import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



import data from "./data/data.json";

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

