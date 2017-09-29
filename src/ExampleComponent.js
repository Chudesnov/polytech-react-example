import React from 'react';

export default class ExampleComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.input.value;
    }
    componentWillReceiveProps(nextProps) {
        nextProps;
    }
    componentWillUpdate(nextProps, nextState) {
        this.props.smth !== nextProps.smth && alert('omg');
    }
    componentDidUpdate() {
        this.input.value;
    }
    componentWillUnmount() {

    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return <div>
            <input
                ref={inputElement => { this.input = inputElement; }}
                onChange={this.handleChange}
            />
            <p>{this.state.value}</p>
        </div>;
    }
}

