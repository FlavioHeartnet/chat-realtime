import React ,{Component} from 'react'
import {Segment, Grid, Icon} from "semantic-ui-react"

class Mensagem extends Component {

    state = {
      sending : 'clock outline',
      sended: 'check',
      recived:  'check circle outline',
      viwed: 'check circle'
    };
    //{this.props.mensagem.isMine && <Icon color={''}  name='check' /> }
    render() {
        let isMine = 'left'
        let colorBubble = ''
        let user = ''
        if(this.props.mensagem.isMine)
        {
            isMine='right'
            colorBubble = 'teal'
        }else {
            user= this.props.mensagem.user;
        }

        return (
            <Grid.Column floated={isMine} >
                 <Segment inverted={this.props.mensagem.isMine} color={colorBubble} className="">
                     {user !== '' && <p><b>{user}</b></p>}
                     {this.props.mensagem.texto}
                     <p style={{width:'100%'}} className="textoHoraEstilo">{this.props.mensagem.hora} </p>
                 </Segment>
            </Grid.Column>
        );
    }
}
export default Mensagem