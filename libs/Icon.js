import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    role: PropTypes.string
};
const defaultProps = {
    size: 'md'
};
class Icon extends Component {
    render() {
        const { name, className, size, color, role } = this.props;
        const classes = classNames('material-icons', className,
        {
            ['icon-'+name]: name,
            ['icon-'+size]: size,
            [color]: color
        });
        return React.createElement(
                'span',
                Object.assign({},
                    objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                    {
                        className: classes,
                        role: role && role
                    }
                )
            );
    };
};
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
export default Icon;