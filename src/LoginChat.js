import React, { Component } from 'react';
import {Button, Form} from "semantic-ui-react";

class LoginChat extends Component {
    render() {
        return (
                <div>
                    <Form>
                        <Form.Field>
                            <input placeholder={'Digite seu nome ou apelido para entrar no Chat'}/>
                        </Form.Field>
                        <Button primary type={'submit'}>Iniciar</Button>
                    </Form>
                </div>
        );
    }
}

export default LoginChat;