import React, { Component } from "react";
import { Tab, TabItem, TabContent, TabPage } from 'views/libs/';
class _TabWithContentPage extends Component {
    constructor(){
        super()
        this.state = {
            activeTab: 'web'
        };
    }
    render() {
        return (
            <div>
                <h3>Example Tab with tab content and page</h3>
                <Tab>
                    <TabItem name="web" activeTab={this.state.activeTab} setActiveTab={() => this.setState({activeTab: 'web'})} >
                        Web
                    </TabItem>
                    <TabItem name="image" activeTab={this.state.activeTab} setActiveTab={() => this.setState({activeTab: 'image'})} >
                        Image
                    </TabItem>
                    <TabItem name="video" activeTab={this.state.activeTab} setActiveTab={() => this.setState({activeTab: 'video'})} >
                        Video
                    </TabItem>
                </Tab>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPage name="web">
                        This page for web
                    </TabPage>
                    <TabPage name="image">
                        This page for image
                    </TabPage>
                    <TabPage name="video">
                        This page for video
                    </TabPage>
                </TabContent>
            </div>
        );
    }
}
export default _TabWithContentPage;