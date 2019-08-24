import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const propTypes = {
    className: PropTypes.string,
    name: PropTypes.any,
    children: PropTypes.node
};
const contextTypes = {
    activeTab: PropTypes.any
};
class TabPage extends Component {
    constructor(props, context){
        super();
    }
    render() {
        const { name, children } = this.props, { activeTab } = this.context;
        const classes = classNames('tab-page', classNames, name === activeTab ? 'show' : '')
        return React.createElement(
            'div',
            { 
                className: classes
            },
            children
        );
    };
};
TabPage.propTypes = propTypes;
TabPage.contextTypes = contextTypes;
export default TabPage;