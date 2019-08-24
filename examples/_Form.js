import React, { Component } from "react";
import { Button, Form, EditText, TextField, Card, CardHeader, CardBody, CardFooter, TextView, Icon, FilePicker } from 'views/libs/';
class _Form extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            address: '',
            password: '',
            description: '',
            valid: false,
            file: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    };
    handleInputChange(e){
        console.log(e.target.files);
    }
    render() {
        return (
            <Form>
                <Card>
                    <CardHeader>
                        <TextView type="h3">Example Forms</TextView>
                    </CardHeader>
                    <CardBody>
                        <TextField hasIcon hasFeedback>
                            <TextField.Icon size="sm" name="account-circle"/>
                            <EditText type="text" name="username" value={this.state.name} onChange={this.handleChange} placeholder="Username"/>
                            <TextField.Feedback/>
                        </TextField>
                        <TextField hasIcon hasLabel hasFeedback hasValidation>
                            <TextField.Label>Address</TextField.Label>
                            <TextField.Icon size="sm" name="home"/>
                            <EditText bordered type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Address"/>
                            <TextField.Validation show={this.state.valid} setClose={() => this.setState({valid: false})}>This cannot be undefined</TextField.Validation>
                            <TextField.Feedback bg="primary" onClick={()=>this.setState({valid: !this.state.valid})}/>
                        </TextField>
                        <TextField hasFeedback hasLabel hasValidation>
                        <TextField.Label>Password</TextField.Label>
                            <EditText type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                            <TextField.Feedback onClick={()=>this.setState({valid: !this.state.valid})}>
                                <Icon size="xs" name="remove-red-eye"/>
                            </TextField.Feedback>
                            <TextField.Validation show={this.state.valid} setClose={() => this.setState({valid: false})}>Valid !</TextField.Validation>
                        </TextField>
                        <FilePicker name="file" onChange={this.handleInputChange}/>
                        <TextField>
                            <EditText bordered multiline name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description" style={{height: 100}}/>
                        </TextField>
                    </CardBody>
                    <CardFooter>
                        <Button type="submit">Submit</Button>
                    </CardFooter>
                </Card>
            </Form>
        );
    }
}
export default _Form;