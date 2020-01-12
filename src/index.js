import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                React element is rendering to the DOM!
            </div>
        )
    }
}

render(<App />, document.getElementById('root'))