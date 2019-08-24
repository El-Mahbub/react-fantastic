import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    activeTab: PropTypes.any,
    bg: PropTypes.string,
    children: PropTypes.node
};
const childContextTypes = {
    activeTab: PropTypes.any
};
class TabContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab
        };
    };
    componentWillReceiveProps(nextProps) {
        const { activeTab } = this.state;
        activeTab !== nextProps.activeTab && this.setState({activeTab: nextProps.activeTab});
    };
    getChildContext() {
        return {
            activeTab: this.state.activeTab
        };
    };
    render() {
        const { className, bg, children } = this.props;
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classNames('tab-content', className, {['bg-'+bg]: bg})
                },
            ),
            children
        );
    };
};
TabContent.propTypes = propTypes;
TabContent.childContextTypes = childContextTypes;
export default TabContent;