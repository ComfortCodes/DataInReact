import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactData from './data';
import ApiData from './api';

ReactDOM.render(<ReactData/>, document.getElementById('root'));
ReactDOM.render(<ApiData/>, document.getElementById('root'));

