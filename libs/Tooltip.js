import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import warning from 'warning';
import RelativeLayout from './RelativeLayout';
const propTypes = {
    className: PropTypes.string,
    trigger: PropTypes.string,
    position: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    delay: PropTypes.number,
    children: PropTypes.node
};
const defaultProps = {
    position: '',
    trigger: 'click',
    title: '',
    delay: 0
};
class Tooltip extends Component {
    constructor(props, context) {
        super();
        this.state = {
            show: false
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };
    handleMouseOver(e) {
        e.preventDefault();
        this.setState({show: true});
    }
    handleMouseOut(e) {
        e.preventDefault();
        this.setState({show: false});
    }
    handleClick(e) {
        e.preventDefault();
        this.setState({show: !this.state.show})
    }
    render() {
        const { className, trigger, position, title, delay, children } = this.props, { show } = this.state, triggers = ['hover', 'click'];
        process.env.NODE_ENV !== 'production' && warning((triggers.indexOf(trigger) !== -1), 'Trigger tooltip only have "click" or "hover" value. Choose one of them instead.');
        const classes = classNames('tooltip', className, show ? 'transparency-9' : 'transparency-0', {[position]: position});
        return React.createElement(
            RelativeLayout,
            triggers.indexOf(trigger) !== -1 ? trigger === triggers[0] ? {onMouseOver: (e) => this.handleMouseOver(e), onMouseOut: (e) => this.handleMouseOut(e)} : {onClick: (e) => this.handleClick(e)} : {},
            [
                React.createElement(
                    'div',
                    Object.assign({},
                        objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                        {
                            className: classes,
                            key: title,
                            style: delay ? { transitionDelay: delay+'s'} : {}
                        }
                    ),
                    React.createElement(
                        'div',
                        {
                            className: 'tooltip-content'
                        },
                        title
                    )
                ),
                children
            ]
        );
    };
};
Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
export default Tooltip;