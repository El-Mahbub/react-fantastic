import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    bg: PropTypes.string,
    fixTop: PropTypes.bool,
    fixBottom: PropTypes.bool,
    center: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node
};
const defaultProps = {
    bg: 'default'
};
class Tab extends Component {
    constructor(){
        super();
        this.handleScrollY = this.handleScrollY.bind(this);
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollY, false);
    };
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollY, false);
    };
    handleScrollY(){
        const scrollYPosition = window.scrollY || window.pageYOffset, collapseLayout = this.props.targetCollapse, tabLayout = this.tabLayout;
        let tabLayoutElement, collapseLayoutElement, collapseLayoutHeight, tablayoutHeight, newTabClasses;
        if(tabLayout && collapseLayout) {
            tabLayoutElement = ReactDOM.findDOMNode(tabLayout);
            collapseLayoutElement = ReactDOM.findDOMNode(collapseLayout);
            collapseLayoutHeight = collapseLayoutElement.clientHeight;
            tablayoutHeight = tabLayoutElement.clientHeight;
            newTabClasses = collapseLayoutElement.className+' fix-top';
            if(scrollYPosition > (collapseLayoutHeight - tablayoutHeight)){
                collapseLayoutElement.style.height = tablayoutHeight+'px';
                tabLayoutElement.className = tabLayoutElement.className.indexOf(newTabClasses) === -1 ? tabLayoutElement.className.concat(' ', newTabClasses) : tabLayoutElement.className;
            }
            else {
                collapseLayoutElement.style.height = collapseLayoutHeight+'px';
                tabLayoutElement.className = tabLayoutElement.className.replace(new RegExp('(^| )'+newTabClasses+'( |$)'), '').trim();
            }
        }
    };
    render() {
        const { className, bg, fixTop, fixBottom, center, style, children } = this.props;
        const classes = classNames('tab', className, {['bg-'+bg]: bg, 'fix-top': fixTop, 'fix-bottom': fixBottom, 'center': center});
        return React.createElement(
            'ul',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                    ref: el => this.tabLayout = el,
                    style
                }
            ),
            children
        );
    }
};
Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
export default Tab;