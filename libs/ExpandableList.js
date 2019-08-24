import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    ordered: PropTypes.bool,
    unstyle: PropTypes.bool,
    activeList: PropTypes.any,
    children: PropTypes.node
};
const defaultProps = {
    ordered: true,
    unstyle: false
};
const childContextTypes = {
    activeList: PropTypes.any
};
class ExpandableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList: props.activeList
        };
    };
    componentWillReceiveProps(nextProps) {
        nextProps.activeList !== this.props.activeList && this.setState({activeList:nextProps.activeList})
    };
    getChildContext() {
        return {
            activeList: this.state.activeList
        };
    };
    render() {
        const { className, ordered, unstyle, children } = this.props;
        let tag = ordered ? 'ol' : 'ul', classes = classNames('expandable-list', className, {'unstyle': unstyle });
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
ExpandableList.propTypes = propTypes;
ExpandableList.defaultProps = defaultProps;
ExpandableList.childContextTypes = childContextTypes;
export default ExpandableList;