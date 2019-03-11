import React, { Component } from 'react';
import {Button, Form} from "semantic-ui-react";

class LoginChat extends Component {

    state ={
        user:''
    }

    changeHandler =event=>{
        this.setState({
            user: event.target.value
        })
    }

    logar=()=>{
        this.props.logar(this.state.user)

    }

    render() {
        return (
                <div>
                    <Form>
                        <Form.Field>
                            <input onChange={this.changeHandler} placeholder={'Digite seu nome ou apelido para entrar no Chat'}/>
                        </Form.Field>
                        <Button onClick={this.logar} primary type={'submit'}>Iniciar</Button>
                    </Form>
                </div>
        );
    }
}

export default LoginChat;