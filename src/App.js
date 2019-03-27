import React, { Component } from 'react';
import './App.css';
import LoginChat from './LoginChat'
import SendMessage from './SendMessage'
import {Segment} from "semantic-ui-react";
import Mensagens from './Mensagens'
import User from './User'


class App extends Component {

    state = {
        user: '',
        text:'',
        isLogado: false,
        messagesEnd:'',
        messages:[

        ],
        usuario:{},
        isAuthError:false,
        AuthError:'',
    };

    formataHora = ()=>{
        let date = new Date();
        return (date.getHours() < 10 ? "0"+date.getHours(): date.getHours()) + ":"+ (date.getMinutes() < 10 ? "0"+ date.getMinutes() : date.getMinutes())
    }

    sendMessage = (texto) =>{


        const id = this.props.database.ref().child('mensagens').push().key;
        const mensagens ={};
        var date = new Date();
        mensagens['mensagens/'+id]=
            {
                'texto':texto,
                'email': this.state.user.email,
                'UserId': this.state.user.uid,
                'hora': this.formataHora(),
                'data':date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()
            };
        console.log(mensagens);
        this.props.database.ref().update(mensagens);

    };

    logar= async (email, senha)=>{

        this.setState({
            authError: '',
            isAuthError:false
        })
        try{
            const {auth} = this.props;
            const user = await auth.signInWithEmailAndPassword(email,senha)
            console.log(email, senha, user)
        }catch (e) {
            this.setState({
                authError: e.code,
                isAuthError:true
            })
        }
    }

    logout = () =>{
        const {auth} = this.props;
        auth.signOut();

    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {

        this.comments = this.props.database.ref('mensagens');
        this.comments.on('value', snapshot => {
            this.setState({
                messages: snapshot.val()
            });
        })
        this.props.auth.onAuthStateChanged(user =>{
            if(user)
            {
                this.setState({
                    isLogado:true,
                    user
                })
            }else{
                this.setState({
                    isLogado:false,
                    user:{}
                })
            }
        })

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
          {this.state.isLogado && <User email={this.state.user.email}  logout={this.logout}/>}
          {!this.state.isLogado && <LoginChat authError={this.state.authError} isAuthError={this.state.isAuthError} logar={this.logar}/>}
          {this.state.isLogado && <Mensagens user={this.state.user} messages={this.state.messages}/>}
            <br/>
          {this.state.isLogado &&<SendMessage sendMessage={this.sendMessage} />}

          <div style={{ float:"left", clear: "both" }}
               ref={(el) => { this.messagesEnd = el; }}>
          </div>
      </Segment>
    );
  }
}

export default App;
