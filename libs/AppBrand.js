import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    position: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {
    position: 'left',
    color: 'dark'
};
class AppBrand extends Component {
    render() {
        const { className, position, color, children } = this.props;
        const classes = classNames('appbar-brand', className, {['push-'+position]: position, [color]: color});
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                },
            ),
            children
        );
    };
};
AppBrand.propTypes = propTypes;
AppBrand.defaultProps = defaultProps;
export default AppBrand;