import React from 'react'
import ReactDOM from 'react-dom'
import './style.styl'

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            name: 'Merunas!',
            myNumber: 5,
        }
    }

    updateMyState () {
        // This method will change our state number to 8
        this.setState({
            myNumber: 8,
        })
    }

    render () {
        return (
            <div>
                This is html inside a javascript {this.state.name} {this.state.myNumber}
                <button onClick={() => {
                    this.updateMyState()
                }}>Update my state</button>

                <input type="text" placeholder="Type something" onChange={e => {
                    const inputValue = e.target.value
                    this.setState({
                        name: inputValue,
                    })
                }} />

                <List
                    firstItem="this is the first item"
                    passDataToParent={data => {
                        console.log(data)
                    }}
                />
            </div>
        )
    }
}

class List extends React.Component {
    constructor () {
        super()
    }

    passData () {
        this.props.passDataToParent('this is my data')
    }

    render () {
        return (
            <div>
                <ul>
                    <li>{this.props.firstItem}</li>
                </ul>

                <button onClick={() => {
                    this.passData()
                }}>Pass data to parent</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
