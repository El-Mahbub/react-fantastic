import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListItem from './ListItem';
const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
class ToolbarListItem extends Component {
    render() {
        const { className, children } = this.props;
        const classes = classNames('toolbar-list-item', className);
        return React.createElement(
            ListItem,
            {
                className: classes
            },
            children
        )
    };
};
ToolbarListItem.propTypes = propTypes;
export default ToolbarListItem;