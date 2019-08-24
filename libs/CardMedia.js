import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    bg: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {
    bg: 'default'
};
class CardMedia extends Component {
    render() {
        const { className, bg, children } = this.props;
        const classes = classNames('card-media', className, {['bg-'+bg]: bg});
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
CardMedia.propTypes = propTypes;
CardMedia.defaultProps = defaultProps;
export default CardMedia;