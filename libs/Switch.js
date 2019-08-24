import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    line: PropTypes.bool,
    shape: PropTypes.bool,
    checkedColor: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.node
};
const defaultProps = {
    checkedColor: 'primary',
    onChange: function(){}
};
class Switch extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: props.checked
        };
    };
    componentWillReceiveProps(nextProps){
        nextProps.checked !== this.props.checked && this.setState({checked: nextProps.checked});
    };
    render(){
        const { className, name, line, shape, checkedColor, onChange } = this.props;
        const classes = classNames('switch', className, {'line': line, 'shape': shape, [checkedColor]: checkedColor});
        return React.createElement(
            'label',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes
                }
            ),
            [React.createElement(
                'input',
                Object.assign({},
                    objectWithoutProperties(this.props, ['name', 'onChange' , 'checked']),
                    {
                        key: name,
                        type: 'checkbox',
                        name: name ? name : '',
                        onchange: (e) => onChange(e),
                        checked: this.state.checked
                    }
                )
            ),
            React.createElement(
                'span',
                {
                    className: 'slider',
                    key: name ? name : Math.random()
                }
            )]
        );
    };
};
Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
export default Switch;