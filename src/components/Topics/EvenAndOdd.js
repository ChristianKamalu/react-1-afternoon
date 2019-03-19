import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

    }
    
    solveToyProblem(e) {
        this.setState({ userInput: e});
    }

    assignEvenAndOdds(userInput) {
        let nums = userInput.split(',');
        let evens = [];
        let odds = [];
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {
                evens.push( parseInt(nums[i], 10))
            } else {
                odds.push( parseInt(nums[i], 10 ))
            }
        }

        this.setState({ evenArray: evens, oddArray: odds})
    }

    render () {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLIne"
                    onChange={ (e) => this.solveToyProblem(e.target.value) }/>
                <button className="confirmationButton"
                    onClick={ () => {
                        this.assignEvenAndOdds(this.state.userInput)
                    }}> Compute </button>
                <span className="resultsBox"> Evens = {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox"> Odds = {JSON.stringify(this.state.oddArray)}</span>
            </div>
            )
        }
}