import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: 'this is state',
        }
    }
    update(e) {
        this.setState({text: e.target.value})
    }
    render() {
        const txt = this.state.text;
        return (
            <div>
                <h1>Great job</h1>
                <Widget update={this.update.bind(this)} />
                <div>{txt}</div>
            </div>
        )
    }
}

// App.defaultProps = {
//     text: 'default'
// }

const Widget = (props) => {
    return <input type="text" onChange={props.update} />
}

export default App;
