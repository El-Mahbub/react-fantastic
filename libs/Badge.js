import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    bg: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    role: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {
    bg: 'default',
    color: 'dark',
    size: 'xs'
};
class Badge extends Component {
    render() {
        const { className, bg, color, size, role, children } = this.props;
        const classes = classNames('badge', className, {['bg-'+bg]: bg, [color]: color, ['badge-'+size]: size});
        return React.createElement(
            'span',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    role
                }
            ),
            children
        );
    };
};
Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
export default Badge;