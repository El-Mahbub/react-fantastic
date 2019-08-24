import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    children: PropTypes.node
};
const defaultProps = {
    hasIcon: false
};
class Form extends Component {
    render() {
        const { className, hasIcon, children } = this.props;
        const classes = classNames('form', className, {'has-icon': hasIcon});
        return React.createElement(
            'form',
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
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
export default Form;