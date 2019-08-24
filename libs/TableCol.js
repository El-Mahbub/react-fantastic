import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
const propTypes = {
    className: PropTypes.string,
    span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node
};
const defaultProps = {};
class Col extends Component {
    render() {
        const { className, children } = this.props;
        const classes = classNames(0, className);
        return React.createElement(
            'col',
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
Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
export default Col;