import React, {Component} from 'react'
import {Button, Label,Modal,Form} from "semantic-ui-react";


class SignUp extends Component {

    state ={
        user:'',
        senha:''
    }

    handleChange = field =>event =>{
        this.setState({
            [field]: event.target.value
        })
    };

    create=()=>{
        this.props.cadastrar(this.state.user, this.state.senha)
        this.setState({
            user:''
        })
    }

    render() {
        const errorMessages={
            'auth/email-already-in-use': 'Já existe este usuario cadastrado!',
            'auth/weak-password': 'Senha fraca',
            'auth/invalid-email':'Email inválido!',
        }
        return (
            <div>
                <Modal trigger={<Button>Cadastrar</Button>}>
                    <Modal.Header>Cadastre seu email e senha aqui</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                                <Form.Field>
                                    <label>E-mail</label>
                                    <input onChange={this.handleChange('user')} type={'email'} value={this.state.user} placeholder={'Digite seu email para entrar no Chat'}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Senha</label>
                                    <input onChange={this.handleChange('senha')} value={this.state.senha} type={'password'} placeholder={'Digite sua senha'}/>
                                </Form.Field>
                                <Button onClick={this.create} primary type={'submit'}>Salvar</Button>
                                {
                                    this.props.isSignUpError && <Label color={'red'}>{errorMessages[this.props.signUpError]}</Label>
                                }
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default SignUp;