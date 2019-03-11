import React ,{Component} from 'react'
import {Form, Input} from "semantic-ui-react"

class SendMessage extends Component {

    state ={
        newMessage:''
    }

    sendMessage = ()=> {
        this.props.sendMessage(this.state.newMessage, this.props.user)
        this.setState({
            newMessage: ''
        })

        window.scrollTo(0,document.body.scrollHeight);
    };
    handleChange = event =>{
        this.setState({
            newMessage: event.target.value
        })
    };

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <Input onChange={this.handleChange} value={this.state.newMessage} action={{ color: 'teal', labelPosition: 'right', icon: 'send', content: 'Enviar', onClick: this.sendMessage }} placeholder='Digite sua mensagem...' />
                    </Form.Field>

                </Form>
            </div>
        );
    }
}
export default SendMessage