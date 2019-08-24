import React, { Component } from 'react';
import { Dialog, Button } from 'views/libs/';
class _BasicDialog extends Component {
    constructor(){
        super();
        this.state={
            show: false
        }
    }
    render() {
        return (
            <div>
                <h3>Basic dialog</h3>
                <hr/>
                <Button onClick={() => this.setState({show: !this.state.show})}>Open Dialog</Button>
                <Dialog
                    show={this.state.show}
                    noWrap={true}
                    setCloseDialog={() => this.setState({show: false})}
                    setOpenDialog={() => this.setState({show: true})}
                    header={
                        <h1>Header</h1>
                    }
                    body={
                        <p>This is body</p>
                    }
                    footer={
                        <Button>Footer</Button>
                    }
                />
            </div>
        );
    }
}

export default _BasicDialog;