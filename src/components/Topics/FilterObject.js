import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                name: 'Joe',
                age: 13,
                favColor: 'blue'
                }, {
                name: 'Bob',
                age: 11,
                favColor: 'red'
                }, {
                name: 'Steve',
                age: 99,
                sport: 'sipak tekraw'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    updateUserInput(e) {
        this.setState({ userInput: e});
    }

    updateFilterArray(prop) {
        var employees = this.state.unFilteredArray;
        var filteredEmployees = [];
        for(let i = 0; i < employees.length; i++) {
            if(employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i])
            }
        }

        this.setState({ filteredArray: filteredEmployees})
    }

    render () {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.updateFilterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}