import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    show: PropTypes.show,
    header: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    body: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    footer: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    setCloseDialog: PropTypes.func,
    onCloseDialog: PropTypes.func,
    hideOnClickOutside: PropTypes.bool,
    id: PropTypes.string,
    noWrap: PropTypes.oneOfType([PropTypes.bool,PropTypes.string])
};
const defaultProps = {
    show: false,
    hideOnClickOutside: true,
    noWrap: false
};
class Dialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: props.show,
            id: props.id
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
    };
    componentDidMount() {
        this.state.show && document.body.addEventListener('click', this.handleClickOutside, false);
    };
    componentWillReceiveProps(nextProps){
        const { show, id } = this.props;
        if(!id)
            nextProps.show !== show && this.setState({show: nextProps.show});
        else
            nextProps.show !== show && this.setState({show: nextProps.show, id: nextProps.id});
    };
    componentWillUnmount() {
        this.state.show && document.body.removeEventListener('click', this.handleClickOutside, false);
    };
    handleClickOutside(e){
        const { onCloseDialog, hideOnClickOutside } = this.props, { show } = this.state;
        if(show) {
            e.preventDefault();
            if(e.target && !this.dialog.contains(e.target) && this.props.setCloseDialog && hideOnClickOutside) {
                e.stopPropagation();
                if(onCloseDialog){
                    this.props.onCloseDialog(e);
                    this.props.setCloseDialog(e);
                }
                else {
                    this.props.setCloseDialog(e);
                }
            }
        }
    };
    render() {
        const { className, header, body, footer, noWrap } = this.props, { show, id } = this.state;
        return (
            !noWrap ?
            React.createElement(
                'div',
                Object.assign({},
                    objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                    {
                        className: classNames('dialog', show ? 'show' : 'hide'),
                        id
                    }
                ),
                React.createElement(
                    'div',
                    {
                        className: classNames('dialog-content', className),
                        ref: el => this.dialog = el
                    },
                    [
                        React.createElement(
                            'div',
                            {
                                className: 'dialog-header'
                            },
                            header
                        ),
                        React.createElement(
                            'div',
                            {
                                className: 'dialog-body'
                            },
                            body
                        ),
                        React.createElement(
                            'div',
                            {
                                className: 'dialog-footer'
                            },
                            footer
                        )
                    ]
                )
            ) :
            React.createElement(
                'div',
                Object.assign({},
                    objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                    {
                        className: classNames('dialog-content', className, show ? 'show' : 'hide'),
                        id,
                        ref: el => this.dialog = el
                    }
                ),
                [
                    React.createElement(
                        'div',
                        {
                            className: 'dialog-header'
                        },
                        header
                    ),
                    React.createElement(
                        'div',
                        {
                            className: 'dialog-body'
                        },
                        body
                    ),
                    React.createElement(
                        'div',
                        {
                            className: 'dialog-footer'
                        },
                        footer
                    )
                ]
            )
        );
    }
};
Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
export default Dialog;