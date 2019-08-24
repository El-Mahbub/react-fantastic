import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
class LinearLayout extends Component {
    render() {
        const { className, children } = this.props;
        const classes = classNames('linear-layout', className);
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                }
            )
        );
    };
};
LinearLayout.propTypes = propTypes;
export default LinearLayout;