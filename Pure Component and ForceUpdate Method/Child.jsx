import React, {Component, PureComponent} from 'react';

class Child extends PureComponent {
    handleClick = e => {
        let newName = {...this.props.state};
        this.setState({name: newName});
        this.forceUpdate();
    }

    render() {
        let {state} = this.props;
        console.log("Render method from child component");
        return (
            <div>
                <h1>Child Component {state}</h1>
                <button onClick={this.handleClick}>Change</button>
            </div>
        );
    }
}

export default Child;