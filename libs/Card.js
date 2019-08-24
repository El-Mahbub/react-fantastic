import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    inline: PropTypes.bool,
    responsive: PropTypes.bool,
    bg: PropTypes.string,
    children: PropTypes.node
};
class Card extends Component {
    getChildContext() {
        return {
            inline: this.props.inline
        };
    };
    render() {
        const { className, inline, responsive, bg, children } = this.props;
        const classes = classNames('card', className, {'inline': inline, 'responsive': responsive, ['bg-'+bg]: bg});
        return React.createElement(
            'div',
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
Card.propTypes = propTypes;
export default Card;