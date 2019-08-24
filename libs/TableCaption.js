import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {};
class Caption extends Component {
    render() {
        const { className, children } = this.props;
        const classes = classNames(0, className);
        return React.createElement(
            'caption',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                }
            ),
            children
        );
    }
}
Caption.propTypes = propTypes;
Caption.defaultProps = defaultProps;
export default Caption;