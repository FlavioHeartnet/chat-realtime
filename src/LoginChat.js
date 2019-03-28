import React, { Component } from 'react';
import {Button, Form, Label} from "semantic-ui-react";
import SignUp from './SignUp'

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
    cadastrar =(user,senha)=>
    {
        this.props.cadastrar(user, senha)
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
                        <SignUp cadastrar={this.cadastrar}/><br/>
                        <Button onClick={this.logar} primary type={'submit'}>Logar</Button>
                        {
                            this.props.isAuthError && <Label color={'red'}>{errorMessages[this.props.authError]}</Label>
                        }

                    </Form>
                </div>
        );
    }
}

export default LoginChat;