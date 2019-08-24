import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconField from './Icon';
import LabelField from './Label';
import ButtonField from './Button';
import AlertField from './Alert';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
class TextField extends Component {
    getChildContext() {
        const { hasIcon, hasLabel, hasFeedback, hasValidation } = this.props;
        return {
            hasIcon,
            hasLabel,
            hasFeedback,
            hasValidation
        };
    };
    static Label(props) {
        const { className, color, children } = props;
        return React.createElement(
            LabelField,
            Object.assign({},
                objectWithoutProperties(props, ['className', 'color', 'typeFor', 'htmlFor']),
                {
                    className: 'text-field-label',
                    color,
                    typeFor: 'textfield'
                }
            ),
            children
        );
    };
    static Icon(props) {
        const { className, name, size, color, role } = props;
        return React.createElement(
            IconField,
            Object.assign({},
                objectWithoutProperties(props, ['className','name', 'size', 'color', 'role']),
                {
                    className: 'text-field-icon',
                    name,
                    size,
                    color,
                    role
                }
            )
        );
    };
    static Feedback(props) {
        const { className, bg, onClick, children } = props;
        return React.createElement(
            ButtonField,
            Object.assign({},
                objectWithoutProperties(props, ['className', 'bg', 'onClick']),
                {
                    className: 'text-field-feedback',
                    bg: bg ? bg : 'transparent',
                    onClick: onClick ? onClick : function(){}
                }
            ),
            children ? children : '\x23'
        );
    };
    static Validation(props) {
        const { className, show, bg, setClose, children } = props;
        return React.createElement(
            AlertField,
            Object.assign({},
                objectWithoutProperties(props, ['className', 'size', 'color']),
                {
                    className: classNames('text-field-validation'),
                    show,
                    bg,
                    setCloseAlert: setClose ? setClose : function(){}
                }
            ),
            children
        );
    };
    render() {
        const { className, hasIcon, hasLabel, hasFeedback, hasValidation, children } = this.props;
        const classes = classNames('text-field', {'has-icon': hasIcon, 'has-label': hasLabel, 'has-feedback': hasFeedback, 'has-validation': hasValidation})
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, ['className', 'hasIcon', 'hasLabel', 'hasFeedback', 'hasValidation']),
                {
                    className: classes
                }
            ),
            children
        );
    };
};
TextField.propTypes = {
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    hasLabel: PropTypes.bool,
    hasFeedback: PropTypes.bool,
    hasValidation: PropTypes.bool,
    children: PropTypes.node
};
TextField.defaultProps = {
    hasIcon: false,
    hasLabel: false,
    hasFeedback: false,
    hasValidation: false
};
TextField.childContextTypes = {
    hasIcon: PropTypes.bool,
    hasLabel: PropTypes.bool,
    hasFeedback: PropTypes.bool,
    hasValidation: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    feedback: PropTypes.node
};
TextField.Label.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node
};
TextField.Icon.propTypes = {
    className: PropTypes.string
};
TextField.Feedback.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
TextField.Validation.propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    bg: PropTypes.string,
    setClose: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
TextField.Validation.defaultProps = {
    bg: 'default',
    show: false
};
export default TextField;