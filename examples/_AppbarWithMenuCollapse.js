import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { app_name, app_logo, avatar_default } from 'configs/Constants';
import { AnimationHelper } from 'helpers/AnimationHelper';
import { AppBar, AppBarMenu, AppBrand, Button, Image, Icon, Container, List, ListItem, Toolbar, ToolbarList, ToolbarListItem } from 'views/libs/';
class _AppbarWithMenuCollapse extends Component {
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
            <AppBar bg="primary" fixTop ref={el => this.navbar = el}>
                <Container>
                    <Toolbar>
                        <AppBrand color="light">
                            {app_name}
                        </AppBrand>
                        <ToolbarList>
                            <ToolbarListItem>
                                <Icon name="search" size="sm" color="light" role="button" onClick={this.showSearchbar}/>
                            </ToolbarListItem>
                            <ToolbarListItem>
                                <Icon name="more-vert" size="sm" color="light" role="button" onClick={this.toggleAppbarMenu}/>
                            </ToolbarListItem>
                        </ToolbarList>
                    </Toolbar>
                    <AppBarMenu show={appbarMenu.show} collapsedStyle="option" setCloseAppBarMenu={()=>this.setState({appbarMenu: { show: false }})}>
                        <List>
                            <ListItem>
                                Mencintai
                            </ListItem>
                            <ListItem>
                                Kamu
                            </ListItem>
                            <ListItem>
                                Mencintai
                            </ListItem>
                            <ListItem>
                                Kamu
                            </ListItem>
                            <ListItem>
                                Mencintai
                            </ListItem>
                            <ListItem>
                                Kamu
                            </ListItem>
                        </List>
                    </AppBarMenu>
                </Container>
            </AppBar>
        );
    }
}

export default _AppbarWithMenuCollapse;