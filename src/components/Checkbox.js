import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        return (
            <div className="checkbox">
                <input type="checkbox" name="thing" value="valuable" id="thing" /><label for="thing"></label> {this.props.text}
            </div>
        );
    }
}

export default Checkbox;