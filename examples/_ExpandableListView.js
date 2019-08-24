import React, { Component } from 'react';
import { TextView, ExpandableList, ExpandableListItem, List, ListItem } from 'views/libs/';
class _ExpandableListView extends Component {
    constructor(){
        super()
        this.state = {
            activeList: 'one'
        }
    }
    render() {
        return (
            <React.Fragment>
                <TextView type="h4">Example Expandable list</TextView>
                <ExpandableList unstyle activeList={this.state.activeList} style={{backgroundColor: '#fdfdfd'}}>
                    <ExpandableListItem setActiveList={() => this.setState({activeList: 'one'})} name="one" style={{borderBottom: '1px solid #222'}}>
                        <TextView>One</TextView>
                        <List>
                            <ListItem>Javascript</ListItem>
                        </List>
                    </ExpandableListItem>
                    <ExpandableListItem setActiveList={() => this.setState({activeList: 'two'})} name="two" style={{borderBottom: '1px solid #222'}}>
                        <TextView>Two</TextView>
                        <List>
                            <ListItem>Phyton</ListItem>
                        </List>
                    </ExpandableListItem>
                    <ExpandableListItem setActiveList={() => this.setState({activeList: 'three'})} name="three" style={{borderBottom: '1px solid #222'}}>
                        <TextView>Three</TextView>
                        <List>
                            <ListItem>Java</ListItem>
                            <ListItem>Php</ListItem>
                        </List>
                    </ExpandableListItem>
                </ExpandableList>
            </React.Fragment>
        );
    }
}

export default _ExpandableListView;