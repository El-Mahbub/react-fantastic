// Done
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const proptypes = _interopRequireDefault(PropTypes);
const propTypes = {
    className: proptypes.default.string,
    show: proptypes.default.bool,
    collapsedStyle: proptypes.default.string,
    setCloseAppBarMenu: proptypes.default.func,
    onCloseAppBarMenu: proptypes.default.func,
    hideOnClickOutside: PropTypes.bool,
    children: proptypes.default.node
};
const defaultProps = {
    show: false,
    hideOnClickOutside: true
};
class AppBarMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: props.show
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
    };
    componentDidMount() {
        const { hideOnClickOutside } = this.props;
        hideOnClickOutside && document.body.addEventListener('click', this.handleClickOutside, false);
    };
    componentWillReceiveProps(nextProps) {
        if(nextProps.show && !this.props.show) this.setState({show: nextProps.show});
    };
    componentWillUnmount() {
        const { hideOnClickOutside } = this.props;
        hideOnClickOutside && document.body.removeEventListener('click', this.handleClickOutside);
    };
    handleClickOutside(e){
        const { show } = this.props, { appbar_menu } = this;
        if(show) {
            e.preventDefault();
            if(e.target && !appbar_menu.contains(e.target) && this.props.setCloseAppBarMenu) {
                e.stopPropagation();
                if(appbar_menu.className.indexOf('option') !== -1 || appbar_menu.className.indexOf('slide') !== -1)
                    if(this.props.onCloseAppBarMenu) {
                        this.props.onCloseAppBarMenu(e);
                        this.props.setCloseAppBarMenu(e);
                    }
                    else {
                        this.props.setCloseAppBarMenu(e);
                    }
            }
        }
    };
    render() {
        const { className, collapsedStyle, show } = this.props;
        const classes = classNames('appbar-menu', className, window.innerWidth < 768 && [collapsedStyle, show ? 'show' : 'hide']);
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    ref: el => this.appbar_menu = el
                }
            ),
            this.props.children
        )
    }
};
AppBarMenu.propTypes = propTypes;
AppBarMenu.defaultProps = defaultProps;
export default AppBarMenu;