import React, { Component } from 'react';
import './App.css';
import LoginChat from './LoginChat'
import SendMessage from './SendMessage'
import {Segment} from "semantic-ui-react";
import Mensagens from './Mensagens'

class App extends Component {



    state = {
        user: '',
        isLogado: false,
        messagesEnd:'',
        messages:[
            {
                texto: 'Lorem ipsum motadet',
                isMine:false,
                user:'Teste',
                hora: '15:30'
            },
            {
                texto: 'Lorem ipsum motadet Lorem ipsum motadet',
                isMine:true,
                user:'Teste1',
                hora: '15:31'
            },
            {
                texto: 'Lorem ipsum motadet Lorem ipsum motadet Lorem ipsum motadet',
                isMine:false,
                user:'Teste',
                hora: '15:32'
            },
            {
                texto: 'Lorem ipsum motadet Lorem ipsum motadet Lorem ipsum motadet',
                isMine:true,
                user:'Teste',
                hora: '15:35'
            },
        ]
    };

    formataHora = ()=>{
        let date = new Date();
        return (date.getHours() < 10 ? "0"+date.getHours(): date.getHours()) + ":"+ (date.getMinutes() < 10 ? "0"+ date.getMinutes() : date.getMinutes())
    }

    sendMessage = (texto,user) =>{

        this.setState({
            messages:[...this.state.messages, {
                texto: texto,
                isMine:true,
                user: user,
                hora: this.formataHora()
            }]
        })

    };
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
    return (
      <Segment raised className="ui container">
          <div className="ui container center aligned">
              <h1 className="header">Chat Dev</h1>
              <br/>
          </div>

          {this.state.isLogado && <LoginChat/>}
            <Mensagens messages={this.state.messages}/>
            <br/>
           <SendMessage user={this.state.user} sendMessage={this.sendMessage} />

          <div style={{ float:"left", clear: "both" }}
               ref={(el) => { this.messagesEnd = el; }}>
          </div>
      </Segment>
    );
  }
}

export default App;
