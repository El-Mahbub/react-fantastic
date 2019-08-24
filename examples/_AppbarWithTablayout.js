import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { app_name, app_logo } from 'configs/Constants';
import { AnimationHelper } from 'helpers/AnimationHelper';
import { AppBar, AppBarMenu, AppBrand, Badge, Button, Container, DrawerToggler, Tab, TabItem, Toolbar, ToolbarList, Image, ToolbarListItem } from 'views/libs/';
class _AppbarWithTablayout extends Component {
    constructor(){
        super();
        this.state = {
            viewport: {
                width: 0
            },
            searchbar: {
                show: false
            },
            appbarMenu: {
                show: false
            }
        };
        this.resizeWindow = this.resizeWindow.bind(this);
        this.showSearchbar = this.showSearchbar.bind(this);
        this.hideSearchbar = this.hideSearchbar.bind(this);
        this.toggleAppbarMenu = this.toggleAppbarMenu.bind(this);
    };
    componentDidMount(){
        this.resizeWindow();
        window.addEventListener('resize', this.resizeWindow, false);
    };
    componentDidUpdate(prevProps, prevState) {
        //prevProps.height !== this.navbar.clientHeight && window.addEventListener('resize',this.props.navbarHeight(this.navbar.clientHeight));
    };
    componentWillUnmount(){
        window.removeEventListener('resize',this.resizeWindow);
    };
    resizeWindow(e){
        e !== undefined && e.preventDefault();
        const browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || window.screen.width;
        this.setState({
            viewport:{
                width: browserWidth
            }
        });
    };
    showSearchbar(){
        this.setState({...this.state,searchbar: {...this.state.searchbar,show: true}});
    };
    hideSearchbar(){
        this.setState({...this.state,searchbar: {...this.state.searchbar,show: false}})
    };
    toggleAppbarMenu(){
        this.setState({...this.state,appbarMenu: {...this.state.appbarMenu,show: !this.state.appbarMenu.show}});
    };
    render(){
        const { navCollapsed, viewport, searchbar, dialogMenu, appbarMenu } = this.state;
        return (
            <AppBar bg="primary" ref={el => this.navbar = el}>
                <Container>
                    <Toolbar>
                        {this.props.drawerToggler}
                        <AppBrand theme="dark">
                            {app_name}
                        </AppBrand>
                        <ToolbarList hideOnDekstop>
                            <ToolbarListItem>
                                <span className="icon-md material-icons icon-search text-shadow" onClick={this.showSearchbar} role="button"/>
                            </ToolbarListItem>
                            <ToolbarListItem>
                                <span className="icon-md material-icons icon-more-vert text-shadow" onClick={this.toggleAppbarMenu} role="button"/>
                            </ToolbarListItem>
                        </ToolbarList>
                    </Toolbar>
                    <AppBarMenu className="fit push-right" show={appbarMenu.show}>
                        {viewport.width < 768 ?
                        <div className="searchbar fit" style={searchbar.show ? {display: 'block'} : {display: 'none'}}>
                            <input className="edittext push-left" type="search" placeholder="Cari&hellip;"/>
                            <button className="btn-icon btn-transparent push-right" onClick={this.hideSearchbar}><span className="fa fa-remove font-md dark"/></button>
                        </div> :
                        <div className="text-field has-feedback">
                            <input className="edittext-bordered"/>
                            <button className="text-field-feedback btn-light"><span className="material-icons icon-search icon-sm" role="button"/></button>
                        </div>
                        }
                        <Tab bg="primary" targetCollapse={this.navbar}
                        >
                            <TabItem className="active">
                                <span className="font-lg material-icons icon-notifications" role="button"/><Badge>1</Badge>
                            </TabItem>
                            <TabItem>
                                <span className="font-lg  material-icons icon-message" role="button"/><Badge>134</Badge>
                            </TabItem>
                        </Tab>
                    </AppBarMenu>
                </Container>
            </AppBar>
        );
    }
}

export default _AppbarWithTablayout;