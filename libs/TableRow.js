import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {};
class TableRow extends Component {
    render() {
        const { className, children } = this.props;
        const classes = classNames(0, className);
        return React.createElement(
            'tr',
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
TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;
export default TableRow;