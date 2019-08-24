import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {
    className: 'card my-2 p-2'
};
class Blockquote extends Component {
    render() {
        const { className, children } = this.props;
        return React.createElement(
            'div',
            {
                className: classNames(className)
            },
                React.createElement(
                    'blockquote',
                    null,
                    children
                )
        );
    }
}
Blockquote.propTypes = propTypes;
Blockquote.defaultProps = defaultProps;
export default Blockquote;