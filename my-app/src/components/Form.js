import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            topic: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(this.state.username)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        username
                    </label>
                    <input type="text" value={this.state.username} onChange={this.handleChange}>
                    </input>
                </div>
                <div>
                    <label>
                        Topic
                    </label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">
                            React
                        </option>
                        <option value="angular">
                            Angular
                        </option>
                        <option value="vue">
                            Vue
                        </option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default Form;