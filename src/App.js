import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Fuctional child component (widget) and example of default Props

// class App extends Component {
//     constructor() { //constructor will allow you to establish a state in this component
//         super();  //super connects 'this' keyword
//              //pass props into constructor and super to access this.props in constructor
//         this.state = {
//             text: 'this is state',
//         }
//     }
//     update(e) {
//         this.setState({text: e.target.value})
//     }
//     render() {
//         const txt = this.state.text;
//         return (
//             <div>
//                 <h1>Great job</h1>
//                 <Widget update={this.update.bind(this)} />
//                 <Widget update={this.update.bind(this)} />
//                 <Widget update={this.update.bind(this)} />
//                 <div>{txt}</div>
//             </div>
//         )
//     }
// }

// App.defaultProps = {
//     text: 'default'
// }

// const Widget = (props) => {
//     return <input type="text" onChange={props.update} />
// }


// Props.children example. this.props.children accesses innerHTML or nested components

// class App extends Component {
//     render() {
//         return <Button>I <Heart /> React</Button>
//     }
// }
//
// const Button = (props) => <button>{props.children}</button>
//
// class Heart extends Component {
//     render() {
//         return <span>&hearts;</span>
//     }
// }


//event listeners

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {currentEvent: '---'}
//         this.update = this.update.bind(this);
//     }
//     update(e) {
//         this.setState({currentEvent: e.type})
//     }
//     render() {
//         return (
//             <div>
//                 <textarea
//                     cols="30"
//                     rows="10"
//                     onKeyPress={this.update}
//                     onCopy={this.update}
//                     onCut={this.update}
//                     onPaste={this.update}
//                     onFocus={this.update}
//                     onBlur={this.update}
//                     onDoubleClick={this.update}
//                     onMouseOver={this.update}/>
//                 <h1>{this.state.currentEvent}</h1>
//             </div>
//         )
//     }
// }


//ref example

// class App extends Component {
//     constructor(){
//         super();
//         this.state = {a: '', b: ''}
//     }
//     update(e) {
//         this.setState({a: this.refs.a.value, b: this.refs.b.value})
//     }
//     render() {
//         return (
//             <div>
//                 <input
//                     ref="a"
//                     type="text"
//                     onChange={this.update.bind(this)}
//                 />
//                 <span>{this.state.a}</span>
//                 <hr />
//                 <input
//                     ref="b"
//                     type="text"
//                     onChange={this.update.bind(this)}
//                 />
//                 <span>{this.state.b}</span>
//             </div>
//         )
//     }
// }



//lifecycle methods

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {val: 0};
//         this.update = this.update.bind(this);
//     }
//     update() {
//         this.setState({val: this.state.val + 1})
//     }
//     componentWillMount() {
//         console.log('componentWillMount')
//     }
//     render() {
//         console.log('render');
//         return <button onClick={this.update}>{this.state.val}</button>
//     }
//     componentDidMount() {
//         console.log('componentDidMount')
//     }
//     componentWillUnmount() {
//         console.log('componentWillUnmount')
//     }
// }
//
// class Wrapper extends Component {
//     mount() {
//         ReactDOM.render(<App />, document.getElementById('a'))
//     }
//     unmount() {
//         ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.mount.bind(this)}>Mount</button>
//                 <button onClick={this.unmount.bind(this)}>UnMount</button>
//                 <div id="a"></div>
//             </div>
//         )
//     }
// }
//
// export default Wrapper;


//Receiving new props

class App extends Component {
    constructor() {
        super();
        this.state = {increasing: false}
    }
    update() {
      console.log('update')
        ReactDOM.render(<App val={this.props.val + 1}/>, document.getElementById('root'))
    }
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val %5 === 0;
        //this will keep render from firing until true is returned
        //meanwhile props.val is still increasing, just not being rendered
        //(this.state.increasing is also set to true after initial render)
    }
    render() {
        console.log('increasing: ', this.state.increasing)
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps: ', prevProps)
        console.log('prevState: ', prevState)
    }
}

App.defaultProps = {val: 0};


// make an api call and map data from an array and filter it
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {items: []}
//     }
//     componentWillMount() {
//         fetch('https://swapi.co/api/people')
//             .then( response => response.json() )
//             .then( ({results}) => {
//                 console.log(results)
//                 this.setState({items: results})
//             })
//     }
//     filter(e) {
//         this.setState({filter: e.target.value});
//     }
//     render() {
//         let items = this.state.items;
//         if (this.state.filter) {
//             items = items.filter((item) => {
//                 return item.name.toLowerCase()
//                 .includes(this.state.filter.toLowerCase())
//             })
//         }
//         return (
//             <div>
//                 <input type="text" onChange={this.filter.bind(this)} />
//                 { items.map((item,i) => {
//                     return (
//                         <div key={i}>
//                             <span>{item.name}</span>
//                         </div>
//                     )
//                 }) }
//             </div>
//         )
//     }
// }


//setup for creating higher order components
//INCOMPLETE
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Button>button</Button>
//                 <hr />
//                 <Label>label</Label>
//             </div>
//         )
//     }
// }
//
// const Button = (props) => <button>{props.children}</button>
//
// class Label extends Component {
//     render() {
//         return (
//             <label>{this.props.children}</label>
//         )
//     }
// }

export default App;
