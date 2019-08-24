import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import IconFont from './Icon';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    setToggleDrawer: PropTypes.func,
    onToggleDrawer: PropTypes.func,
    children: PropTypes.node
};
class DrawerToggler extends Component {
    static Icon() {
        return React.createElement(
            IconFont,
            {
                name: 'menu',
                size: 'sm'
            }
        );
    };
    render() {
        const { className, setToggleDrawer, onToggleDrawer, children } = this.props;
        return React.createElement(
            Button,
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classNames('drawer-toggler', className),
                    bg: 'transparent',
                    onClick: (e) => setToggleDrawer ? onToggleDrawer ? this.props.onToggleDrawer(e) && this.props.setToggleDrawer(e) : this.props.setToggleDrawer(e) : function(){}
                }
            ),
            children
        );
    };
};
DrawerToggler.propTypes = propTypes;
export default DrawerToggler;