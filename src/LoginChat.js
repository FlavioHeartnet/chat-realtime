import React, { Component } from 'react';
import {Button, Form} from "semantic-ui-react";

class LoginChat extends Component {

    state ={
        user:'',
        senha:''
    }

    handleChange = field =>event =>{
        this.setState({
            [field]: event.target.value
        })
    };

    logar=()=>{
        this.props.logar(this.state.user, this.state.senha)
        this.setState({
            user:''
        })
    }
    cadastrar =()=>
    {

    }
    render() {
        const errorMessages={
            'auth/wrong-password': 'E-mail e/ou senha inválidos!',
            'auth/user-not-found': 'Usuario não encontrado',
            'auth/invalid-email':'Email inválido!'
        }
        return (
                <div>
                    <Form>
                        <Form.Field>
                            <label>E-mail</label>
                            <input onChange={this.handleChange('user')} type={'email'} value={this.state.user} placeholder={'Digite seu email para entrar no Chat'}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Senha</label>
                            <input onChange={this.handleChange('senha')} value={this.state.senha} type={'password'} placeholder={'Digite sua senha'}/>
                        </Form.Field>
                        <Button onClick={this.logar} primary type={'submit'}>Logar</Button>
                        <Button onClick={this.cadastrar}>Cadastrar</Button>
                    </Form>
                </div>
        );
    }
}

export default LoginChat;