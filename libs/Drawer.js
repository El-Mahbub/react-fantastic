import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };
const propTypes = {
    className: PropTypes.string,
    bg: PropTypes.string,
    show: PropTypes.bool,
    width: PropTypes.number,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setCloseDrawer: PropTypes.func,
    onCloseDrawer: PropTypes.func,
    onOpenDrawer: PropTypes.func,
    hideOnClickOutside: PropTypes.bool,
    toggleDrawerOnDekstop: PropTypes.bool,
    children: PropTypes.node
};
const defaultProps = {
    bg: 'light',
    show: true,
    width: 240,
    top: 0,
    hideOnClickOutside: true,
    toggleDrawerOnDekstop: true
};
class Drawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewport: {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || window.screen.width,
                initialClientX: null
            },
            show: props.show,
            container: null,
            appbarHeight: props.top
        };
        this.resizeWindow = this.resizeWindow.bind(this);
        this.onClickOutside = this.onClickOutside.bind(this);
        this.toggleDrawerOnDekstop = this.toggleDrawerOnDekstop.bind(this);
    };
    componentDidMount(){
        let containers = document.body.querySelectorAll('div[class*=container]'), container, drawer = this.drawer;
        for (const key in containers) {
            if (containers.hasOwnProperty(key)) {
                const element = containers[key];
                container = drawer.previousSibling === element || drawer.nextSibling === element ? element : null;
            }
        }
        if(container && drawer) {
            this.setState({
                container
            });
            this.state.viewport.width > 768 ? Object.assign(container.style, { position: 'relative', width: Number(container.clientWidth)-(Number(drawer.clientWidth) === 0 ? this.props.width : Number(drawer.clientWidth))+'px' }) : Object.assign(container.style, {width: 100+'%', position: 'initial'});
        }
        window.addEventListener('resize', this.resizeWindow, true);
        document.body.addEventListener('click', this.onClickOutside, false);
    };
    componentDidUpdate(prevProps) {
        const { show, toggleDrawerOnDekstop } = this.props;
        prevProps.show !== show && this.setState({show});
        toggleDrawerOnDekstop && this.toggleDrawerOnDekstop(show);
    };
    componentWillUnmount() {
        window.removeEventListener('resize',this.resizeWindow, false);
        document.body.removeEventListener('click', this.onClickOutside, false);
    };
    resizeWindow(e) {
        e && e.preventDefault();
        const drawer = this.drawer, browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || window.screen.width,
        { container } = this.state;
        this.setState({
            viewport: {
                width: browserWidth
            }
        });
        const appbar = document.querySelector('nav.appbar');
        if(browserWidth > 768) {
            this.setState({
                appbarHeight: appbar.clientHeight
            });
        }
        this.state.viewport.width > 768 ? Object.assign(container.style, { position: 'relative', width: (Number(this.state.viewport.width)-Number(drawer.clientWidth))+'px', left: Number(drawer.clientWidth)+'px' }) : Object.assign(container.style, {width: 100+'%', left: 0, position: 'initial'});
    };
    onClickOutside(e) {
        const { viewport, show } = this.state, { setCloseDrawer, hideOnClickOutside, onCloseDrawer } = this.props, drawer = this.drawer;
        if(show){
            e.preventDefault();
            if(e.target && !drawer.contains(e.target) && setCloseDrawer && hideOnClickOutside) {
                e.stopPropagation();
                if(viewport.width < 768) {
                    if(onCloseDrawer) {
                        this.props.onCloseDrawer(e);
                        this.props.setCloseDrawer(e);
                    }
                    else {
                        this.props.setCloseDrawer(e);
                    }
                }
            }
        }
    };
    toggleDrawerOnDekstop(show) {
        let container = this.state.container, drawer = this.drawer;
        if(this.state.viewport.width > 768) {
            if(container && drawer) {
                if(!show) {
                    drawer.className = drawer.className.replace(/drawer-mini/gm, '').trim() + ' drawer-mini';
                    Object.assign(container.style, { width: (Number(this.state.viewport.width)-Number(drawer.clientWidth))+'px', left: Number(drawer.clientWidth)+'px' });
                }
                else {
                    drawer.className = drawer.className.replace(/drawer-mini/gm, '').trim();
                    Object.assign(container.style, { width: (Number(this.state.viewport.width)-Number(drawer.clientWidth))+'px', left: Number(drawer.clientWidth)+'px' });
                }
            }
        }
    };
    render() {
        const { className, bg, top, style, children } = this.props, { viewport, show, appbarHeight } = this.state;
        const classes = classNames('drawer', className, viewport.width < 768 ? show ? 'show' : 'hide' : 'show', {['bg-'+bg]: bg});
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    ref: el => this.drawer = el,
                    style: Object.assign({}, style, {
                        top: viewport.width < 768 ? String(top)+'px' : String(appbarHeight)+'px',
                        zIndex: top > 0 && 1001
                    })
                }
            ),
            children
        )
    }
};
Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;
export default Drawer;