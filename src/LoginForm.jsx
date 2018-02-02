import React from 'react';


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '' };
        
    }

    onInputChange = (e) => {
        this.setState({ username: e.target.value });
    };

    onSubmit = (e) => {
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.username);
        }
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Enter username:
                    <input type="text" value={this.state.username} onChange={this.onInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
