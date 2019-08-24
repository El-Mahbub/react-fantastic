// DONE //
/**
 *                  React Fantastic
 * -------------------------------------------------
 * A library components for react with fantastic ui.
 * -------------------------------------------------
 * Version : 1.0.0
 * Github : El-Mahbub/react-fantastic
 * Keywords : React, Fantastic Ui, Component libary
 * Author : El-Mahbub <elmahbub14021993@gmail.com>
 * Component name : Toast
 * License : MIT
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    delay: PropTypes.number,
    setCloseToast: PropTypes.func,
    onCloseToast: PropTypes.func,
    children: PropTypes.node
};
const defaultProps = {
    show: false,
    delay: 5000
};
class Toast extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: props.show
        };
        this.toastClose = this.toastClose.bind(this);
        this.timerToast = this.timerToast.bind(this);
    };
    componentWillReceiveProps(nextProps){
        nextProps.show !== this.props.show && this.setState({show: nextProps.show});
    };
    toastClose(){
        if(this.props.setCloseToast) {
            if(this.props.onCloseToast) {
                this.props.onCloseToast();
                this.props.setCloseToast();
            }
            else {
                this.props.setCloseToast()
            }
        }
        else {
            this.setState({ show: false });
        }
        clearTimeout(this.timerToast());
    };
    timerToast(){
        const { show, delay } = this.props;
        return setTimeout(() => {
            return show && this.toastClose();
        }, delay);
    };
    render(){
        const { className, children } = this.props, { show } = this.state;
        show && this.timerToast();
        const classes = classNames('toast', className, show ? 'show' : 'hide');
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                   className: classes
                }
            ),
            children
        );
    }
};
Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;
export default Toast;