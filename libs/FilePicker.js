import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    multiple: PropTypes.bool
};
class FilePicker extends Component {
    render() {
        const { className, name, multiple } = this.props;
        const classes = classNames('file-picker', className);
        return React.createElement(
            'input',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                { 
                    className: classes,
                    type: 'file',
                    name,
                    multiple
                }
            )
        );
    };
};
FilePicker.propTypes = propTypes;
export default FilePicker;