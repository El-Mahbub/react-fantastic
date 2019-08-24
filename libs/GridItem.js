import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const objectWithoutProperties = function(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
const propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    all: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offsetAll: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offsetXs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offsetSm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offsetMd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offsetLg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node
};
class GridItem extends Component {
    render() {
        const { className, all, offsetAll, xs, sm, md, lg, offsetXs, offsetSm, offsetMd, offsetLg, children } = this.props;
        const classes = classNames(0, className, {
            ['grid-item-'+all]: all,
            ['grid-item-xs-'+xs]: xs,
            ['grid-item-sm-'+sm]: sm,
            ['grid-item-md-'+md]: md,
            ['grid-item-lg-'+lg]: lg,
            ['grid-item-'+offsetAll+'-offset']: offsetAll,
            ['grid-item-xs-'+offsetXs+'-offset']: offsetXs,
            ['grid-item-sm-'+offsetSm+'-offset']: offsetSm,
            ['grid-item-md-'+offsetMd+'-offset']: offsetMd,
            ['grid-item-lg-'+offsetLg+'-offset']: offsetLg,
        });
        return React.createElement(
            'div',
            Object.assign({},
                objectWithoutProperties(this.props, Object.keys(propTypes).filter(e => e !== 'children')),
                {
                    className: classes,
                }
            ),
            children
        );
    };
};
GridItem.propTypes = propTypes;
export default GridItem;