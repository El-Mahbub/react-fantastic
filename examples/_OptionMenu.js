import React, { Component } from "react";
import { Button, OptionMenuWrapper, OptionMenu, List, ListItem, Container } from 'views/libs/';
class _OptionMenu extends Component {
    constructor(){
        super();
        this.state = {
            show: false
        };
    }
    render() {
        return (
            <Container>
                <OptionMenuWrapper>
                    <Button onClick={()=> this.setState({show: !this.state.show})}>Toggle</Button>
                    <OptionMenu position="left" show={this.state.show} setCloseOptionMenu={() => this.setState({show: false})} hideOnClickOutside>
                        <List unstyle>
                            <ListItem header>Header</ListItem>
                            <ListItem>List 1</ListItem>
                            <ListItem>List 2</ListItem>
                        </List>
                    </OptionMenu>
                </OptionMenuWrapper>
            </Container>
        );
    }
}
export default _OptionMenu;