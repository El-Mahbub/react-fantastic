import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    name: PropTypes.any,
    setActiveList: PropTypes.func,
    children: PropTypes.node
};
const defaultProps = {};
const contextTypes = {
    activeList: PropTypes.any
};
class ExpandableListItem extends Component {
    render() {
        const { className, name, setActiveList, children } = this.props, { activeList } = this.context;
        const classes = classNames(0, className, {'active': [activeList].indexOf(name) !== -1});
        return React.createElement(
            'li',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    onClick: setActiveList ? () => setActiveList() : () => {}
                }
            ),
            children
        );
    };
};
ExpandableListItem.propTypes = propTypes;
ExpandableListItem.defaultProps = defaultProps;
ExpandableListItem.contextTypes = contextTypes;
export default ExpandableListItem;