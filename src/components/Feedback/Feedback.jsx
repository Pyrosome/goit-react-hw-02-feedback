import React, { Component } from 'react';

export class Feedback extends Component {
        state = {
              good: 0,
              neutral: 0,
              bad: 0
        }    
    
    handleGoodButton = () => {
        this.setState({
            good: this.state.good +1
        })
    }
    handleNeutralButton = () => {
        this.setState({
            neutral: this.state.neutral +1
        })
    }
    handleBadButton = () => {
        this.setState({
            bad: this.state.bad +1
        })
    }
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state; 
        return good + neutral + bad;
    } 
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state; 
        return Math.round((good / this.countTotalFeedback()) * 100);
    }

    render() {

        return (
            <div>
                <div className='bottonsBlock'>
                    <button className="goodButton" onClick={this.handleGoodButton}>Good</button>
                    <button className="neutralButton" onClick={this.handleNeutralButton}>Neutral</button>
                    <button className="badButton" onClick={this.handleBadButton}>Bad</button>
                </div>
                <div>
                    <h1>Statistics</h1>
                    <p className='goodCounter'> Good: { this.state.good } </p>
                    <p className='neutralCounter'> Neutral: { this.state.neutral } </p>
                    <p className='badCounter'> Bad: { this.state.bad } </p>
                    <p className='positivePercentage '> Positive feedback: { this.countPositiveFeedbackPercentage() } </p>
                </div>

            </div>
        )
    }
} 
