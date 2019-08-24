import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    htmlFor: PropTypes.string,
    typeFor: PropTypes.string,
    children: PropTypes.node
};
class Label extends Component {
    constructor() {
        super();
        this.handleOverlaying = this.handleOverlaying.bind(this)
    };
    handleOverlaying(e) {
        const focus = {
            top: 'auto',
            bottom: '100%',
            left: '0px',
            fontSize: '12px',
            zIndex: 5,
            color: this.props.color
        },
        label = e.target;
        const textfield = label.parentElement.className.indexOf('text-field') !== -1 && label.parentElement;
        let edittext;
        if(textfield) {
            for (const i in textfield.children) {
                const collections = textfield.children[i];
                if(typeof collections === 'object') {
                    if(collections.className.indexOf('edittext') !== -1) {
                        edittext = collections;
                    }
                }
            }
        };
        label && Object.assign(label.style, focus);
        edittext && edittext.focus();
    };
    render() {
        const { className, color, typeFor, htmlFor, children } = this.props;
        const classes = classNames('text-field-label', className, {['font-'+color]: color});
        return React.createElement(
            'label',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    htmlFor,
                    onClick: typeFor === 'textfield' && this.handleOverlaying
                }
            ),
            children
        );
    };
};
Label.propTypes = propTypes;
export default Label;