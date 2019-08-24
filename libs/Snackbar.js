import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import List from './List';
import ListItem from './ListItem';
import Button from './Button';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    message: PropTypes.string,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    onClickConfirmButton: PropTypes.func,
    onClickCancelButton: PropTypes.func,
    delay: PropTypes.number
};
const defaultProps = {
    show: false,
    message: '',
    cancelText: 'Cancel',
    delay: 7000
};
class Snackbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: props.show,
            message: props.message
        };
        this.snackbarClose = this.snackbarClose.bind(this);
        this.timerSnackbar = this.timerSnackbar.bind(this);
    };
    componentWillReceiveProps(nextProps){
        nextProps.show !== this.state.show && nextProps.message !==this.state.message && this.setState({})
    }
    snackbarClose(){
        this.setState({
            show: false,
             message: ''
        });
        clearTimeout(this.timerSnackbar());
    };
    timerSnackbar(){
        const { show, delay } = this.props;
        return setTimeout(() => {
            return show && this.snackbarClose();
        }, delay);
    };
    render(){
        const { className, confirmText, cancelText, onClickConfirmButton, onClickCancelButton } = this.props, { show, message } = this.state;
        show && this.timerSnackbar();
        const classes = classNames('snackbar', className, show ? 'show' : 'hide');
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, ['className', 'confirmText', 'cancelText', 'onClickConfirmButton', 'onClickCancelButton', 'delay']),
                {
                    className: classes
                }
            ),
            [
                React.createElement(
                    'div',
                    {
                        className: 'snackbar-message'
                    },
                    message
                ),
                React.createElement(
                    'div',
                    {
                        className: 'snackbar-action'
                    },
                    React.createElement(
                        List,
                        {
                            inline: true
                        },
                        React.createElement(
                            ListItem,
                            null,
                            [
                                confirmText || onClickConfirmButton ?
                                React.createElement(
                                    Button,
                                    {
                                        bg: 'transparent',
                                        color: 'success',
                                        onClick: (e) => onClickConfirmButton ? this.props.onClickConfirmButton(e) : function(){}
                                    },
                                    confirmText !== '' ? confirmText : 'Ok'
                                ) :
                                null,
                                React.createElement(
                                    Button,
                                    {
                                        bg: 'transparent',
                                        color: 'danger',
                                        onClick: (e) => onClickCancelButton ? this.props.onClickCancelButton(e) : this.snackbarClose
                                    },
                                    cancelText !== '' ? cancelText : 'Cancel'
                                )
                            ]
                        )
                    )
                )
           ]
        )
    }
};
Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;
export default Snackbar;