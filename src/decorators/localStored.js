import React from 'react';

export default function(storageKey, ComponentClass) {
    return class LocalStored extends React.Component {
        constructor(props) {
            super(props);
            this.setLocalStorageItem = this.setLocalStorageItem.bind(this);
        }
        componentWillMount() {
            this.setState({
                initialValue: localStorage.getItem(storageKey)
            });
        }
        setLocalStorageItem(value) {
            localStorage.setItem(storageKey, value)
        }
        render() {
            return <ComponentClass
                {...this.props}
                onChange={this.setLocalStorageItem}
                initialValue={this.state.initialValue}
            />
        }
    }
}