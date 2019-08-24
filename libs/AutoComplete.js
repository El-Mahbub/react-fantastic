import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import { filterKeysObjectFromKeys, filterKeysObjectToObject } from './utils';
import AbsoluteLayout from './AbsoluteLayout';
import RelativeLayout from './RelativeLayout';
import EditText from './EditText';
import List from './List';
import ListItem from './ListItem';
const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    bordered: PropTypes.bool,
    autoFocus: PropTypes.bool,
    data: PropTypes.array,
    searchIndex: PropTypes.string,
    minChars: PropTypes.number,
    maxChars: PropTypes.number,
    setOnItemClick: PropTypes.func,
    adapter: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};
const defaultProps = {
    bordered: false,
    autoFocus: false,
    minChars: 1,
    maxChars: 10
};
class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            value: props.value,
            show: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        nextProps.value !== this.props.value && this.setState({value: nextProps.value});
    }
    handleChange(e) {
        e.preventDefault();
        const self = this, { data, minChars, maxChars, onChange, searchIndex } = this.props, entry = e.target.value, resultEntry = [];
        if(entry.length >= minChars && entry.length <= maxChars) {
            data && data.length > 0 && data.map((e,i) => e[searchIndex ? searchIndex : 'value'].toLowerCase().indexOf(entry.toLowerCase()) > -1 && resultEntry.push(e) && self.setState({show: true, result: resultEntry}));
        }
        else {
            this.setState({show: false})
        }
        onChange ? onChange(e) : this.setState({value: entry});
    };
    handleBlur(e) {
        e.preventDefault();
        this.setState({show: false});
    };
    onItemClick(e, data) {
        e.preventDefault();
        this.setState({value: data.value});
    };
    render() {
        const { className, name, placeholder, bordered, autoFocus, setOnItemClick, adapter } = this.props, { result, value, show } = this.state;
        const autoCompletePropKeys = ['minChars', 'maxChars', 'setOnItemClick', 'adapter', 'data'];
        const autoCompleteProps = filterKeysObjectToObject(this.props, autoCompletePropKeys);
        const edittextAutoCompletePropKeys = filterKeysObjectFromKeys(propTypes, ['minChars', 'maxChars', 'setOnItemClick', 'adapter', 'data']);
        const edittextAutoCompleteProps = filterKeysObjectToObject(this.props, edittextAutoCompletePropKeys);
        const classes = classNames('autocomplete', className, show ? 'visible' : 'invisible');
        return React.createElement(
            RelativeLayout,
            [
                React.createElement(
                    EditText,
                    Object.assign({},
                        objectWithoutProperties(edittextAutoCompleteProps, edittextAutoCompletePropKeys),
                        {
                            key: 'edittext-autocomplete-'+name,
                            name,
                            placeholder,
                            bordered,
                            autoFocus,
                            onBlur: (e) => this.handleBlur(e),
                            onChange: (e) => this.handleChange(e),
                            value,
                            multiline: false
                        }
                    )
                ),
                React.createElement(
                    AbsoluteLayout,
                    Object.assign({},
                        objectWithoutProperties(autoCompleteProps, autoCompletePropKeys),
                        {
                            key: 'autocomplete-wrapper',
                            className: classes
                        }
                    ),
                    adapter ? React.isValidElement(adapter) ? 
                    React.cloneElement(
                        adapter,
                        {
                            data: result && result
                        }
                    ) : 
                    React.createElement(
                        adapter,
                        {
                            data: result && result
                        }
                    ) :
                    React.createElement(
                        List,
                        {
                            inline: true
                        },
                        result.length > 0 && result.map((e,i) =>
                            React.createElement(
                                ListItem,
                                {
                                    key: e.key,
                                    onClick: (ev) => setOnItemClick ? this.props.setOnItemClick(ev, e) : this.onItemClick(ev, e)
                                },
                                React.createElement(
                                    RelativeLayout,
                                    null,
                                    e.value
                                )
                            )
                        )
                    )
                )
            ]
        );
    };
};
AutoComplete.propTypes = propTypes;
AutoComplete.defaultProps = defaultProps;
export default AutoComplete;