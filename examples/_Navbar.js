import React, { Component } from 'react';
import { app_name, app_logo } from 'configs/Constants';
import { 
    AppBar, 
    AppBarMenu, 
    AppBrand, 
    Image,
    Icon, 
    Badge,
    Container, 
    Tab, 
    TabItem,
    Toolbar, 
    ToolbarList, 
    ToolbarListItem, 
    OptionMenu,
    TextField,
    EditText,
    TextView
} from 'react-fantastic';
class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            viewport: {
                width: 0
            },
            searchbar: {
                show: false
            },
            dialogMenu: {
                show: false,
                target: ''
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
            viewport: {
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
            <AppBar fixTop className="bg-primary" ref={el => this.navbar = el}>
                <Container>
                {!searchbar.show &&
                    <Toolbar>
                        <AppBrand className="bold p-2" theme="light">
                            <Image src={app_logo} role="button"/>
                            <TextView type="a">{app_name}</TextView>
                        </AppBrand>
                        <ToolbarList>
                            <ToolbarListItem>
                                <Icon name="search" role="button" onClick={this.showSearchbar} color="light"/>
                            </ToolbarListItem>
                            <ToolbarListItem>
                                <Icon name="more-vert" role="button" onClick={this.toggleAppbarMenu} color="light"/>
                            </ToolbarListItem>
                        </ToolbarList>
                    </Toolbar>
                    }
                    <AppBarMenu className="fit push-right" show={appbarMenu.show} collapse>
                        {viewport.width < 768 ?
                        <div className="searchbar-wrapper fit" style={searchbar.show ? {display: 'block'} : {display: 'none'}}>
                            <EditText className="searchbar push-left" placeholder="Cari&hellip;"/>
                            <Icon name="remove" className="push-right" onClick={this.hideSearchbar} color="dark"/>
                        </div> :
                        <TextField hasFeedback>
                            <EditText className="searchbar"/>
                            <TextField.Feedback>
                                <Icon name="search" size="sm"/>
                            </TextField.Feedback>
                        </TextField>
                        }
                        <Tab className="bg-primary">
                            <TabItem>
                                <Icon name="notifications" size="sm"/><Badge>7</Badge>
                            </TabItem>
                            <TabItem>
                                <Icon name="chat" size="sm"/><Badge>12</Badge>
                            </TabItem>
                        </Tab>
                    </AppBarMenu>
                </Container>
            </AppBar>
        );
    }
}

export default Navbar;