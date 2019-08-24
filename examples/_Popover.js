import React, { Component } from 'react';
import { Popover, Button } from 'views/libs/';
class _Popover extends Component {
    render() {
        return (
            <React.Fragment>
                <br/>
                <Popover trigger="hover" position="bottom" header="Header" body="Body" footer="Footer"><Button>Popover</Button></Popover>
            </React.Fragment>
        );
    }
}
export default _Popover;