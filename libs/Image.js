import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.string,
    rounded: PropTypes.bool,
    circle: PropTypes.bool,
    full: PropTypes.bool
};
const defaultProps = {
    alt: 'image'
};
class Image extends Component {
    render() {
        const { className, src, alt, size, circle, rounded, full, height, width } = this.props;
        let classes = classNames(className, {
            ['img-'+size]: size,
            'img-circle' : circle,
            'img-rounded': rounded,
            'img-full': full
        });
        return React.createElement(
            'img',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    alt,
                    src,
                    height,
                    width
                }
            )
        );
    }
};
Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
export default Image;