import React from 'react';
import localStored from './decorators/localStored';

class ExampleComponent extends React.Component {
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
        if (this.props.initialValue && !this.state.value) {
            this.input.value = this.props.initialValue;
            this.setState({
                value: this.props.initialValue
            });
        }
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
        this.props.onChange(event.target.value);
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

ExampleComponent.defaultProps = {
    onChange: () => {}
}

const localStoredExample = localStored('example', ExampleComponent);

export default localStoredExample;