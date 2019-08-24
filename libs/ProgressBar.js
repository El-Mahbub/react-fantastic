import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
const propTypes = {
    className: PropTypes.string,
    bg: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    running: PropTypes.bool,
    children: PropTypes.node
};
const defaultProps = {
    bg: 'primary',
    size: 'sm',
    width: '0',
    running: false
};
class ProgressBar extends Component {
    render() {
        const { className, type, bg, size, width, running, children } = this.props;
        const classes = classNames('progressbar', {[size]: size});
        return (!size || ['xs','sm','md','lg'].indexOf(size) === -1 ? 
            React.createElement(
                'progress'
            ) : 
            React.createElement(
                'div',
                Object.assign({},
                    objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                    {
                        className: classes
                    }
                ),
                [
                    React.createElement(
                        'div',
                        {
                            className: classNames('indicator', {[bg]: bg, 'running': running}),
                            style: {width: width && String(width).indexOf('%') > -1 ? width : width+'%', animation: 'transition: width .7s ease-in-out'}
                        }
                    ),
                    children
                ]
            )
        );
    };
};
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
export default ProgressBar;