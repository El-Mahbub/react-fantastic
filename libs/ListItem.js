import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    header: PropTypes.bool,
    footer: PropTypes.bool,
    divider: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
};
const defaultProps = {
    divider: false
};
class ListItem extends Component {
    render() {
        const { className, header, footer, divider, active, disabled, children } = this.props;
        const classes = classNames(className, {
            'header': header,
            'footer': footer,
            'divider': divider,
            'active': active,
            'disabled': disabled
        });
        return React.createElement(
            'li',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                }
            ),
            children
        );
    };
};
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
export default ListItem;