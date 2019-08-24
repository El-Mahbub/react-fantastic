import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    bg: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    setToggleFab: PropTypes.func,
    toggleOnScrollPage: PropTypes.bool,
    hideOnDekstop: PropTypes.bool,
    children: PropTypes.node
};
const defaultProps = {
    toggleOnScrollPage: false
};
class Fab extends Component {
    constructor(){
        super();
        this.handleScrollY = this.handleScrollY.bind(this);
        this.fabIn = this.fabIn.bind(this);
        this.fabOut = this.fabOut.bind(this);
    };
    componentDidMount() {
        const { toggleOnScrollPage } = this.props;
        toggleOnScrollPage && window.addEventListener('scroll', this.handleScrollY, false);
    };
    componentWillUnmount() {
        const { toggleOnScrollPage } = this.props;
        toggleOnScrollPage && window.removeEventListener('scroll', this.handleScrollY);
    };
    handleScrollY(){
        var scrollYPosition = window.scrollY || window.pageYOffset, fab = this.fab;
        fab ? scrollYPosition < 25 ? this.fabIn(fab, 20) : scrollYPosition > 25 && scrollYPosition <= fab.clientHeight && this.fabOut(fab, fab.clientHeight+25) : null;
    };
    fabIn(el, height){
        let anim, interval, i = 0;
        anim = function(){
            for (; i <= height; i++) {
                el.style.bottom = String(i)+'px';
                el.style.visibility = 'visible';
            }
            interval !== undefined && clearTimeout(interval);
        };
        interval = setTimeout(anim(), 500);
    };
    fabOut(el, height){
        let anim, interval, i = 0;
        anim = function(){
            for (; i >= -height; i--) {
                el.style.bottom = String(i)+'px';
                el.style.bottom === -height ? el.style.visibility = 'invisible' : el.style.visibility = 'visible';
            }
            interval !== undefined && clearTimeout(interval);
        };
        interval = setTimeout(anim(), 500);
    };
    render(){
        const { className, size, bg, color, hideOnDekstop, onClick, children } = this.props;
        const classes = classNames('fab', className, {
            ['btn-'+bg]: bg,
            [color]: color,
            'small': size==='small'||size==='xs'||size==='sm',
            'medium': size==='medium'||size==='md',
            'large': size==='large'||size==='lg',
            'hide-md hide-lg': hideOnDekstop
        });
        return React.createElement(
            'button',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    onClick: (e) => onClick && this.props.onClick(e),
                    ref: el => this.fab = el
                }
            ),
            children
        );
    }
}
Fab.propTypes = propTypes;
Fab.defaultProps = defaultProps;
export default Fab;