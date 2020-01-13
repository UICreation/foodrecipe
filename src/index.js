import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import Logo from './static/images/shivam.jpg';
import Recipe from './components'
import Favourites from './components/Favourites'
import Header from './components/Header'
import NotFound from './components/NotFound'
import './static/css/common.css'

const App = () => (
    <Router>
      <div>
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
        <Route path="/" exact component={Recipe} />
        <Route path="/favourites" exact component={Favourites} />
        <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
);

render(<App />, document.getElementById('root'));
