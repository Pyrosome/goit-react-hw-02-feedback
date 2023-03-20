import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';

export class App extends Component {
        state = {
              good: 0,
              neutral: 0,
              bad: 0
        }    
    
  handleCounter = (key) => {
      this.setState(prevState => ({
        [key]: prevState[key] +1
      }))
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
      const { good, neutral, bad } = this.state; 
      const stateKeys = Object.keys(this.state);

        return (
            <div
              style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101'
              }}
            >
    
                <FeedbackOptions options={stateKeys} onLeaveFeedback={this.handleCounter}/>
                <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
            </div>
        )
    }
} 
