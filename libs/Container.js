import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    full: PropTypes.bool,
    id: PropTypes.any,
    children: PropTypes.node
};
const defaultProps = {
    full: false
};
class Container extends Component {
    render() {
        const { className, id, full, children } = this.props;
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classNames(full ? 'container-full' : 'container', className),
                    id
                }
            ),
            children
        )
    }
};
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
export default Container;