import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
const propTypes = {
    className: PropTypes.string,
    bg: PropTypes.string,
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    responsive: PropTypes.bool,
    hoverable: PropTypes.bool,
    children: PropTypes.node
};
const defaultProps = {
    bg: 'transparent',
    bordered: false,
    striped: false,
    responsive: false,
    hoverable: false
};
class Table extends Component {
    render() {
        const { className, bg, bordered, striped, responsive, hoverable, children } = this.props;
        const classes = classNames('table', className, {['bg-'+bg]: bg, 'table-bordered': bordered, 'table-striped': striped, 'hoverable': hoverable});
        return ( responsive ? 
            React.createElement(
                'div',
                {
                    className: 'scrollable-x'
                },
                React.createElement(
                    'table',
                    Object.assign({},
                        objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                        {
                            className: classes
                        }
                    ),
                    children
                )
            ) : 
            React.createElement(
                'table',
                Object.assign({},
                    objectWithoutProperties(this.props, Object.keys(propTypes)),
                    {
                        className: classes
                    }
                ),
                children
            )
        );
    }
}
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
export default Table;