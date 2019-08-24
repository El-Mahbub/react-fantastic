import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import TextField from './TextField';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    bordered: PropTypes.bool,
    multiline: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    color: PropTypes.string,
    labelColor: PropTypes.string,
    borderFocusColor: PropTypes.string
};
const defaultProps = {
    type: 'text',
    name: '',
    placeholder: '',
    bordered: false,
    multiline: false,
    autoFocus: false,
    color: '#222',
    labelColor: '#0ab2f7',
    borderFocusColor: '#0ab2f7'
};
const contextTypes = {
    hasIcon: PropTypes.bool,
    hasLabel: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};
class EditText extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: props.value
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        nextProps.value !== this.props.value && this.setState({value: nextProps.value});
    };
    handleChange(e) {
        e.preventDefault();
        const { onChange } = this.props;
        onChange && onChange(e);
    };
    handleFocus(e) {
        e.preventDefault();
        const { color, labelColor, borderFocusColor, onFocus } = this.props, { hasLabel } = this.context, edittext = e.target;
        if(hasLabel) {
            if(edittext) {
                const textfield = edittext.parentElement.className.indexOf('text-field') !== -1 && edittext.parentElement;
                let label;
                if(textfield) {
                    for (const i in textfield.children) {
                        const collections = textfield.children[i];
                        if(typeof collections === 'object') {
                            if(collections.className.indexOf('text-field-label') !== -1) {
                                label = collections;
                            }
                        }
                    }
                }
                const focus = {
                    top: 'auto',
                    bottom: '100%',
                    left: '0px',
                    fontSize: '12px',
                    zIndex: 5,
                    color: this.props.labelColor
                };
                label && Object.assign(label.style, focus);
            }
        }
        edittext && Object.assign(edittext.style, {borderColor: borderFocusColor, color});
        if(onFocus) {
            onFocus(e);
        }
    };
    handleBlur(e) {
        e.preventDefault();
        const { bordered, onBlur } = this.props, { hasLabel } = this.context, edittext = e.target;
        if(hasLabel) {
            if(edittext && !this.state.value) {
                const textfield = edittext.parentElement.className.indexOf('text-field') !== -1 && edittext.parentElement;
                let label;
                if(textfield) {
                    for (const i in textfield.children) {
                        const collections = textfield.children[i];
                        if(typeof collections === 'object') {
                            if(collections.className.indexOf('text-field-label') !== -1) {
                                label = collections;
                            }
                        }
                    }
                }
                const blur = {
                    top: '20%',
                    left: textfield && textfield.className.indexOf('has-icon') != -1 ? '28px' : '4px',
                    color: '#757575',
                    fontSize: '14px'
                };
                label && Object.assign(label.style, blur);
            }
        }
        edittext && Object.assign(edittext.style, {borderColor: '#ccc'});
        if(onBlur) {
            onBlur(e);
        }
    };
    render() {
        const { className, type, multiline, name, placeholder, value, bordered, onChange, autoFocus } = this.props, { hasLabel, hasIcon, icon } = this.context;
        const classes = classNames(!bordered ? 'edittext': 'edittext-bordered', className), typesAllowed = ['text', 'email', 'password', 'time', 'date', 'datetime', 'datetime-local', 'number', 'month', 'search', 'tel', 'url', 'week'];
        let tag = multiline ? 'textarea' : 'input';
        if(typesAllowed.indexOf(type) !== -1) {
            if(hasLabel){
                return React.createElement(
                    tag,
                    Object.assign({},
                        objectWithoutProperties(this.props, Object.keys(propTypes)),
                        {
                            className: classes,
                            type,
                            name,
                            value: this.state.value,
                            autoFocus,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            autoComplete: 'off'
                        }
                    )
                );
            }
            else {
                return React.createElement(
                    tag,
                    Object.assign({},
                        objectWithoutProperties(this.props, Object.keys(propTypes)),
                        {
                            className: classes,
                            type,
                            name,
                            placeholder,
                            value: this.state.value,
                            autoFocus,
                            onChange: this.handleChange,
                            autoComplete: 'off'
                        }
                    )
                )
            }
        }
        else {
            if(process.env.NODE_ENV !== 'production'){
                warning(typesAllowed.indexOf(type) !== -1, 'EditText type must be one of '+typesAllowed.toString()+'. Otherwise use another input like checkbox, radiobutton, switch, autcomplete etc.')
            }
            React.createElement('input', this.props);
        }
    };
};
EditText.propTypes = propTypes;
EditText.defaultProps = defaultProps;
EditText.contextTypes = contextTypes;
export default EditText;