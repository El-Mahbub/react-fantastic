import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import List from './List';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    position: PropTypes.string,
    hideOnDekstop: PropTypes.bool,
    withScroll: PropTypes.bool,
    children: PropTypes.node
};
const defaultProps = {
    position: 'right',
    hideOnDekstop: false,
    withScroll: false
};
class ToolbarList extends Component {
    render() {
        const { className, position, withScroll, hideOnDekstop, children } = this.props;
        let classes = classNames('toolbar-list', className, {['push-'+position]: position, 'hide-md hide-lg': hideOnDekstop});
        return React.createElement(
            List,
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    inline: true,
                    withScroll
                }
            ),
            children
        )
    };
};
ToolbarList.propTypes = propTypes;
ToolbarList.defaultProps = defaultProps;
export default ToolbarList;