import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.size,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {
    active: false,
    disabled: false,
    href: '#'
};
class Anchor extends Component {
    render() {
        const { className, href, color, size, children, active, disabled } = this.props;
        const classes = classNames(className, {[color]: color, ['font-'+size]: size,'active': active, 'disabled': disabled})
        return React.createElement(
            Link,
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    to: href,
                    disabled: Boolean(disabled)
                }
            ),
            children
        );
    };
};
Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;
export default Anchor;