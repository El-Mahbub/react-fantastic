import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
    children: PropTypes.node
};
class Iframe extends Component {
    render() {
        const { className, name, src, children } = this.props;
        const classes = classNames(0, className);
        return React.createElement(
            'iframe',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    name,
                    src
                }
            ),
            children
        );
    }
};
Iframe.propTypes = propTypes;
export default Iframe;