import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    controls: PropTypes.bool,
    autoplay: PropTypes.bool,
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
const defaultProps = {
    controls: true,
    autoplay: false
};
class Video extends Component {
    render() {
        const { className, src, controls, autoplay, ref } = this.props;
        const classes = classNames(0, className);
        return React.createElement(
            'video',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    controls,
                    autoplay,
                    ref
                }
            ),
            [
                React.createElement(
                    'source',
                    {
                        src,
                        type: 'video/mp4'
                    }
                ),
                React.createElement(
                    'source',
                    {
                        src,
                        type: 'video/ogg'
                    }
                ),
                'Your browser doesn\'t support video element'
            ]
        );
    }
};
Video.propTypes = propTypes;
Video.defaultProps = defaultProps;
export default Video;