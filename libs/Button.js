import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    bg: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    rounded: PropTypes.bool,
    shape: PropTypes.bool,
    circle: PropTypes.bool,
    full: PropTypes.bool,
    type: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {
    type: 'button'
};
class Button extends Component {
    render() {
        const { className, size, bg, color, borderColor, rounded, shape, circle, full, type, children } = this.props;
        const classes = classNames(0, className, {
            ['btn-'+size]: size,
            ['btn-'+bg]: bg,
            [color]: color,
            ['btn-border border-'+borderColor]: borderColor,
            'btn-rounded': rounded,
            'btn-shape': shape,
            'btn-circle': circle,
            'btn-full': full
        });
        return React.createElement(
            'button',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    type
                }
            ),
            children
        )
    }
}
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;