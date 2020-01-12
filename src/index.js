import React from 'react';
import { render } from 'react-dom';
// import Logo from './static/images/shivam.jpg';
import Recipe from './components';
import './static/css/common.css';

const App = () => (
  <Recipe />
);

render(<App />, document.getElementById('root'));
