import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    bg: PropTypes.string,
    fixTop: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    fixBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    children: PropTypes.node
};
const defaultProps = {
    bg: 'default'
};
class AppBar extends Component {
    render() {
        const { className, bg, fixTop, fixBottom, children } = this.props;
        const classes = classNames('appbar', className, {['bg-'+bg]: bg, 'fix-top': fixTop, 'fix-bottom': fixBottom})
        return React.createElement(
            'nav',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                }
            ),
            children
        )
    }
};
AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;
export default AppBar;