// Done
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    bordered: PropTypes.bool,
    bg: PropTypes.string,
    setCloseAlert: PropTypes.func,
    onCloseAlert: PropTypes.func,
    children: PropTypes.node
};
const defaultProps = {
    show: true,
    bordered: false
};
class Alert extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: props.show
        };
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        nextProps.show !== this.state.show && this.setState({show: nextProps.show});
    };
    handleCloseAlert(e){
        e.preventDefault();
        const { setCloseAlert, onCloseAlert } = this.props, { show } = this.state;
        if(show && setCloseAlert) 
            if(onCloseAlert){
                this.props.onCloseAlert(e);
                this.props.setCloseAlert(e);
            }
            else {
                this.props.setCloseAlert(e);
            }
    };
    render() {
        const { className, bordered, bg, children } = this.props, { show } = this.state;
        const classes = classNames('alert', className, {
            ['alert-'+bg]: bg,
            'alert-bordered': bordered
        }, show ? 'show' : 'hide');
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                }
            ),
            [
                this.props.setCloseAlert ?
                React.createElement(
                    'button',
                    Object.assign({},
                        this.props,
                        {
                            className: 'close',
                            onClick: (e) => this.handleCloseAlert(e)
                        },
                    ),
                    '\xD7'
                ) : null,
                children
            ]
        );
    }
};
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default Alert;