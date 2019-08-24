import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
class Toolbar extends Component {
    render() {
        const { className, children } = this.props;
        const classes = classNames('toolbar', className);
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                }
            ),
            React.createElement(
                'div',
                {
                    className: 'fit'
                },
                children
            )
        )
    }
};
Toolbar.propTypes = propTypes;
export default Toolbar;