import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    controls: PropTypes.bool,
    autoplay: PropTypes.bool,
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    children: PropTypes.node
};
const defaultProps = {
    controls: true,
    autoplay: false
};
class Audio extends Component {
    render() {
        const { className, src, controls, autoplay, ref, children } = this.props;
        const classes = classNames(0, className);
        return React.createElement(
            'audio',
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
                        type: 'audio/mpeg'
                    }
                ),
                React.createElement(
                    'source',
                    {
                        src,
                        type: 'audio/ogg'
                    }
                ),
                'Your browser doesn\'t support audio element'
            ]
        );
    }
};
Audio.propTypes = propTypes;
Audio.defaultProps = defaultProps;
export default Audio;