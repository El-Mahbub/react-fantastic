import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    position: PropTypes.string,
    hideOnClickOutside: PropTypes.bool,
    setCloseOptionMenu: PropTypes.func,
    onCloseOptionMenu: PropTypes.func,
    id: PropTypes.string,
    children: PropTypes.node
};
const defaultProps = {
    show: false,
    hideOnClickOutside: true
};
class OptionMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: props.show,
            id: props.id
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
    };
    componentDidMount() {
        document.body.addEventListener('click', this.handleClickOutside, false);
    };
    componentWillReceiveProps(nextProps){
        const { show, id } = this.props;
        if(!id)
            nextProps.show !== show && this.setState({show: nextProps.show});
        else
            nextProps.show !== show && this.setState({show: nextProps.show, id: nextProps.id});
    };
    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleClickOutside, false);
    };
    handleClickOutside(e){
        const { onCloseOptionMenu, hideOnClickOutside } = this.props, { show } = this.state;
        if(show) {
            e.preventDefault();
            if(e.target && !this.optionmenu.contains(e.target) && this.props.setCloseOptionMenu && hideOnClickOutside) {
                e.stopPropagation();
                if(onCloseOptionMenu){
                    this.props.onCloseOptionMenu(e);
                    this.props.setCloseOptionMenu(e);
                }
                else {
                    this.props.setCloseOptionMenu(e);
                }
            }
        }
    };
    render() {
        const { className, position, children } = this.props, { show } = this.state;
        const classes = classNames('option-menu', className, {[position]: position}, show ? 'show' : 'hide');
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    ref: el => this.optionmenu = el
                }
            ),
            children
        );
    };
};
OptionMenu.propTypes = propTypes;
OptionMenu.defaultProps = defaultProps;
export default OptionMenu;