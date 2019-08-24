import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import warning from 'warning';
const propTypes = {
    className: PropTypes.string,
    type: PropTypes.object,
    rowspan: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    colspan: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node
};
const defaultProps = {
    type: 'data'
};
class TableCell extends Component {
    render() {
        const { className, type, children } = this.props, types = ['heading', 'data'];
        const classes = classNames(0, className);
        warning(!type, 'TableCell only have type `heading` (th) or `data` (td). Choose one of them instead.');
        return React.createElement(
            type === types[0] ? 'th' : 'td',
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
TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;
export default TableCell;