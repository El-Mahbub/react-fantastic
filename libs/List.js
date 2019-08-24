import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    ordered: PropTypes.bool,
    unstyle: PropTypes.bool,
    inline: PropTypes.bool,
    withScroll: PropTypes.bool,
    children: PropTypes.node
};
const defaultProps = {
    ordered: false,
    unstyle: true,
    inline: false,
    withScroll: false
};
const contextTypes = {
    activeList: PropTypes.any
};
class List extends Component {
    render() {
        const { className, ordered, unstyle, inline, withScroll, children } = this.props, { activeList } = this.context;
        let tag = ordered ? 'ol' : 'ul', classes = classNames(0, className, {'unstyle': unstyle, 'inline': inline, 'scroll': withScroll}, activeList ? activeList ? 'show' : 'hide' : null);
        return React.createElement(
            tag,
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                }
            ),
            children
        );
    };
};
List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.contextTypes = contextTypes;
export default List;