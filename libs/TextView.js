import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Anchor from './Anchor';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    underline: PropTypes.bool,
    normal: PropTypes.bool,
    align: PropTypes.string,
    transform: PropTypes.string,
    family: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {
    type: 'p',
    size: 'sm'
};
class TextView extends Component {
    render() {
        const { className, type, align, size, color, bold, italic, underline, normal, family, transform, children } = this.props;
        let classes = classNames(0, className, {['font-'+size]: ['p','span','a'].indexOf(type) !== -1 && size, [color]: color, 'bold': bold, 'italic': italic, 'underline': underline, 'normal': normal, ['text-'+align]: align, 'lower': transform === 'lowercase', 'upper': transform === 'uppercase', 'capital': transform === 'capitalize'}), tag;
        const typesAllowed = ['p', 'span', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        return React.createElement(
            typesAllowed.indexOf(type) !== -1 ? type === 'a' ? Anchor : type : 'p',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    style: {
                        fontFamily: family ? family : ''
                    }
                }
            ),
            children
        );
    }
};
TextView.propTypes = propTypes;
TextView.defaultProps = defaultProps;
export default TextView;