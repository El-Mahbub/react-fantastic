import React, { Component } from 'react';
import { Button, Switch } from 'views/libs/';
class Buttons extends Component {
    constructor(){
        super();
        this.state = {
            classname: '',
            type: 'html',
            result: '',
            checked: false
        };
        this.handleChangeClasses = this.handleChangeClasses.bind(this);
        this.handleChangeTypes = this.handleChangeTypes.bind(this);
        this.handleResultCode = this.handleResultCode.bind(this);
    };
    componentDidUpdate(prevProps, prevState) {
        const { classname, type } = this.state;
        prevState.classname !== classname || prevState.type !== type ? this.handleResultCode() : null;
    };
    handleChangeClasses(classname){
        this.setState({ classname });
    };
    handleChangeTypes(type){
        this.setState({ type });
    };
    handleResultCode(){
        const { classname, type } = this.state;
        switch(type){
            case 'html':
                let initialHtml =
`
<!DOCTYPE html>
<html lang="en">
    <head>
    <link rel="stylesheet" type="text/css" href="/assets/css/fantastic.css">
    <title>App</title>
    </head>
    <body>
        <div>

            //code

        </div>
    </body>
</html>
`;
                if(classname.match(/^(switch)/) !== null && classname.match(/^(switch)/).length > 0){
                    this.setState({
                        result: initialHtml.replace('//code',`
            <label className="`+classname+`">
                <input type="checkbox"/>
                <span className="slider"></span>
            </label>`)
                    });
                }
                else {    
                    this.setState({
                        result: initialHtml.replace('//code',`<button class="`+classname+`"></button>`)
                    });
                }
const cl = [];
classname.split(' ').forEach(e => {
    const ex = e.replace(/btn-/g,'');
    return cl.push(ex.indexOf('-') !== -1 ? ex.slice(0,ex.indexOf('-'))+ex.charAt(ex.indexOf('-')+1).toUpperCase()+ex.slice(ex.indexOf('-')+2,ex.length) : ex);
});
console.log(cl.valueOf());
            break;
            case 'react':
                let initialClass =
`
import React, { Component } from 'react';
import { Button } from 'react-fantastic';
class App extends Component {
    render() {
        return (
            <div>
            
                //code

            </div>
        );
    };
};

export default App;
`;
                if(classname.match(/^(fab|fab-)/) !== null && classname.match(/^(fab|fab-)/).length > 0){
                    let classes = [];
                    classname.split(' ').forEach((e) => {
                        const ex = e.replace(/(fab-|btn-)/g,'').replace('fab','');
                        classes.push(ex.indexOf('-') !== -1 ? ex.slice(0,ex.indexOf('-'))+ex.charAt(ex.indexOf('-')+1).toUpperCase()+ex.slice(ex.indexOf('-')+2,ex.length) : ex);
                    });
                    return this.setState({
                        result: initialClass.replace('Button','Fab').replace('//code',`<Fab `+classes.toString().replace(',',' ')+` />`)
                    });
                }
                else if(classname.match(/^(switch)/) !== null && classname.match(/^(switch)/).length > 0){
                    let classes = [];
                    classname.split(' ').forEach((e) => {
                        const ex = e.replace(/(switch|btn-)/g,'');
                        classes.push(ex.indexOf('-') !== -1 ? ex.slice(0,ex.indexOf('-'))+ex.charAt(ex.indexOf('-')+1).toUpperCase()+ex.slice(ex.indexOf('-')+2,ex.length) : ex);
                    });
                    return this.setState({
                        result: initialClass.replace('Button','Switch').replace('//code',`<Switch `+classes.toString().replace(',',' ')+` />`)
                    });
                }
                else {
                    let classes = [];
                    classname.split(' ').forEach((e) => {
                        if(e.match(/btn/g) !== null && e.match(/btn/g).length > 0){
                            const ex = e.replace(/btn-/g,'');
                            classes.push(ex.indexOf('-') !== -1 ? ex.slice(0,ex.indexOf('-'))+ex.charAt(ex.indexOf('-')+1).toUpperCase()+ex.slice(ex.indexOf('-')+2,ex.length) : ex);
                        }
                    });
                    return this.setState({
                        result: initialClass.replace('//code',`<Button `+classes.toString().replace(',',' ')+` />`)
                    });
                }
            break;
        }
    };
    render() {
        const { result } = this.state;
        return (
            <div>
                <div id="buttons">
                    <div>
                        <h3># <a>Buttons</a></h3>
                    </div>
                    <hr/>
                    <div>
                        <p className="mb-2"><button className="mr-2">button</button> This button with no style will be appear</p>
                        <h5>Classes customizing :</h5>
                        <p><samp><var className="hm-tag">{'<'}</var><var className="hm-name">{'button'}</var> <var className="hm-attribute">{'class'}</var><var className="hm-tag">{'='}</var><var className="hm-property">{'*'}</var><var className="hm-tag">{'['}</var><var className="hm-value">{'className'}</var><var className="hm-tag">{']'}</var></samp></p>
                        <div className="card">
                            <div className="card-header fit">
                                <h5 className="push-left">Code box</h5>
                                <ul className="inline push-right">
                                    <li>
                                        <button className="btn-xs" onClick={() => this.handleChangeTypes('html')}>Html</button>
                                    </li>
                                    <li>
                                        <button className="btn-xs" onClick={() => this.handleChangeTypes('react')}>ReactJs</button>
                                    </li>
                                </ul>
                            </div>
                            <pre className="scroll" style={{minHeight: 300}}>
                                <code>
                                    {
                                        result !== '' ? result : `<h1>Click one of the collection below and your codes will displayed here.</h1>`
                                    }
                                </code>
                            </pre>
                            <div className="card-body">
                                <h5>Collections :</h5>
                                <ul className="inline">
                                    <li className="mb-1">
                                        <button className="btn-xs mr-2" onClick={() => this.handleChangeClasses('btn-xs')}>btn-xs</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-sm mr-2" onClick={() => this.handleChangeClasses('btn-sm')}>btn-sm</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-md mr-2" onClick={() => this.handleChangeClasses('btn-md')}>btn-md</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-lg mr-2" onClick={() => this.handleChangeClasses('btn-lg')}>btn-lg</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-icon-xs fa fa-remove" onClick={() => this.handleChangeClasses('btn-icon-xs')}></button> btn-icon-xs
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-icon-sm fa fa-remove" onClick={() => this.handleChangeClasses('btn-icon-sm')}></button> btn-icon-sm
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-icon-md fa fa-remove" onClick={() => this.handleChangeClasses('btn-icon-md')}></button> btn-icon-md
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-icon-lg fa fa-remove" onClick={() => this.handleChangeClasses('btn-icon-lg')}></button> btn-icon-lg
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-transparent mr-2" onClick={() => this.handleChangeClasses('btn-transparent')}>btn-transparent</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-default mr-2" onClick={() => this.handleChangeClasses('btn-default')}>btn-default</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-light mr-2" onClick={() => this.handleChangeClasses('btn-light')}>btn-light</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-primary mr-2" onClick={() => this.handleChangeClasses('btn-primary')}>btn-primary</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-success mr-2" onClick={() => this.handleChangeClasses('btn-success')}>btn-success</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-warning mr-2" onClick={() => this.handleChangeClasses('btn-warning')}>btn-warning</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-danger mr-2" onClick={() => this.handleChangeClasses('btn-danger')}>btn-danger</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-info mr-2" onClick={() => this.handleChangeClasses('btn-info')}>btn-info</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-attention mr-2 onClick={() => this.handleChangeClasses('btn-attention')}">btn-attention</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-dark mr-2" onClick={() => this.handleChangeClasses('btn-dark')}>btn-dark</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-rounded mr-2" onClick={() => this.handleChangeClasses('btn-rounded')}>btn-rounded</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-shape mr-2" onClick={() => this.handleChangeClasses('btn-shape')}>btn-shape</button>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-circle fa fa-remove" onClick={() => this.handleChangeClasses('btn-circle')}></button> btn-circle
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn-icon btn-transparent fa fa-remove" onClick={() => this.handleChangeClasses('btn-icon btn-transparent')}></button>btn-icon btn-transparent
                                    </li>
                                    <li className="mb-1">
                                        <input type="radio" onClick={() => this.handleChangeClasses('radio')}/> radio
                                    </li>
                                    <li className="mb-1">
                                        <input type="checkbox" onClick={() => this.handleChangeClasses('checkbox')}/> checkbox
                                    </li>
                                    <li className="mb-1">
                                        <Switch onChange={()=>this.setState({checked: !this.state.checked})}/> switch
                                    </li>
                                    <li className="mb-1">
                                        <Switch onChange={()=>this.setState({checked: !this.state.checked})} checked={this.state.checked}/> switch shape
                                    </li>
                                    <li className="mb-1">
                                        <label className="switch line" onClick={() => this.handleChangeClasses('switch line')}>
                                            <input type="checkbox"/>
                                            <span className="slider"></span>
                                        </label> switch line
                                    </li>
                                    <li className="mb-1"><button className="fab-small fa fa-remove dark" style={{position:'initial'}} onClick={() => this.handleChangeClasses('fab')}></button> fab-small</li>
                                    <li className="mb-1"><button className="fab-medium btn-danger fa fa-remove" style={{position:'initial'}} onClick={() => this.handleChangeClasses('fab-medium btn-danger')}></button> fab-medium</li>
                                    <li className="mb-1"><button className="fab-large btn-primary fa fa-remove" style={{position:'initial'}} onClick={() => this.handleChangeClasses('fab-large btn-primary')}></button> fab-large</li>
                                    <button className="btn-full mr-2" onClick={() => this.handleChangeClasses('btn-full')}>btn-full</button>
                                    <button className="btn-full btn-shape mr-2" onClick={() => this.handleChangeClasses('btn-full btn-shape')}>btn-full btn-shape</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buttons;