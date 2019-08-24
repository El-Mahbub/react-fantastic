import React, { Component, Fragment } from "react";
import { Autocomplete, TextView, Image, List, ListItem } from 'views/libs/';
const path_photo_examples = process.env.PUBLIC_URL+'/assets/img/examples/';
class _Autocomplete extends Component {
    constructor(){
        super();
        this.state = {
            data: [
                {
                    key: 0,
                    value: 'Abigail'
                },
                {
                    key: 1,
                    value: 'Acrey'
                },
                {
                    key: 2,
                    value: 'Adam'
                },
                {
                    key: 3,
                    value: 'Amstrong'
                },
                {
                    key: 4,
                    value: 'Ann'
                },
                {
                    key: 5,
                    value: 'Avicenna'
                }
            ],
            advance: [
                {
                    id: 0,
                    name: 'El-Mahbub',
                    photo: path_photo_examples+'1.png'
                },
                {
                    id: 1,
                    name: 'Michael',
                    photo: path_photo_examples+'2.jpg'
                },
                {
                    id: 2,
                    name: 'Rihanna',
                    photo: path_photo_examples+'3.jpg'
                },
                {
                    id: 3,
                    name: 'Adelle',
                    photo: path_photo_examples+'4.jpg'
                },
                {
                    id: 4,
                    name: 'Hanin',
                    photo: path_photo_examples+'5.jpg'
                }
            ],
            value3: '',
            value4: '',
            resultText: ''
        };
        this.handleChangeAdvance = this.handleChangeAdvance.bind(this);
        this.handleOnItemClick = this.handleOnItemClick.bind(this);
        this.handleOnItemClickAdvance = this.handleOnItemClickAdvance.bind(this);
    }
    handleChangeAdvance(e) {
        this.setState({value4: e.target.value});
    };
    handleOnItemClick(e, data){
        this.setState({resultText: data.value})
    };
    handleOnItemClickAdvance(e, data){
        this.setState({value4: data.name})
    };
    render() {
        const adapter = props => {
            const li = props.data.length > 0 && props.data.map((e,i) => <ListItem key={e.key}>{e.value}</ListItem>);
            return (
                <List>
                    {li}
                </List>
            )
        };
        const adapterAdvance = props => {
            const li = props.data.length > 0 && props.data.map((e,i) => (
                <ListItem key={e.id} onClick={(ev) => this.handleOnItemClickAdvance(ev,e)}>
                    <TextView type="p" size="sm"><Image className="avatar-sm" circle src={e.photo}/>{e.name}</TextView>
                </ListItem>
            ));
            return (
                <List inline>
                    {li}
                </List>
            )
        };
        return (
            <Fragment>
                <TextView type="h2">Autocomplete</TextView>
                <TextView type="p">data : {JSON.stringify(this.state.data)}</TextView>
                <TextView type="h4">Basic Autocomplete</TextView>
                <br/>
                <Autocomplete placeholder="Type 'a'" data={this.state.data}/>
                <br/>
                <TextView type="h4">Autocomplete with min/max chars</TextView>
                <br/>
                <Autocomplete placeholder="Type here : min 2 chars" minChars={2} data={this.state.data}/>
                <br/>
                <TextView type="h4">Autocomplete with event `setOnItemClick`</TextView>
                <br/>
                <Autocomplete placeholder="Type 'a'" value={this.state.value3} setOnItemClick={this.handleOnItemClick} data={this.state.data}/>
                <TextView type="p">Result: {this.state.resultText}</TextView>
                <br/>
                <TextView type="h4">Autocomplete with custom adapter</TextView>
                <br/>
                <Autocomplete placeholder="Type here" data={this.state.data} adapter={adapter}/>
                <br/>
                <br/>
                <TextView type="h4">Advance Autocomplete example</TextView>
                <br/>
                <Autocomplete
                    bordered
                    placeholder="Type here"
                    name="example"
                    value={this.state.value4}
                    onChange={this.handleChangeAdvance}
                    data={this.state.advance}
                    adapter={adapterAdvance}
                    searchIndex="name"/>
                <br/>
                <TextView type="p">Note: If you are using custom adapter in autocomplete, `setOnItemClick` will be fired so create your own `onItemClick` in your adapter like at example.</TextView>
                <hr/>
                <TextView type="h3">JUST IT</TextView>
                <br/>
            </Fragment>
        );
    }
}
export default _Autocomplete;