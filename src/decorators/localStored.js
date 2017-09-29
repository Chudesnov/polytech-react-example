import React from 'react';

export default function(storageKey, ComponentClass) {
    return class LocalStored extends React.Component {
        componentWillMount() {
            this.setState({
                initialValue: '1'//localStorage.getItem(storageKey)
            });
        }
        setLocalStorageItem(value) {
            //localStorage.setItem(storageKey, value)
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