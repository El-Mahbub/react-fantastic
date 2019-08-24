import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    name: PropTypes.any,
    colorIndicator: PropTypes.string,
    activeTab: PropTypes.any,
    setActiveTab: PropTypes.func,
    children: PropTypes.node
};
const defaultProps = {
    colorIndicator: 'info'
};
class TabItem extends Component {
    render() {
        const { className, name, colorIndicator, activeTab, setActiveTab, children } = this.props;
        const classes = classNames(0, className, name && activeTab && name === activeTab && 'active', {['border-'+colorIndicator]: colorIndicator});
        return React.createElement(
            'li',
            Object.assign({},
            objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    onClick: setActiveTab ? () => setActiveTab() : () => {}
                }
            ),
            children
        );
    };
};
TabItem.propTypes = propTypes;
TabItem.defaultProps = defaultProps;
export default TabItem;