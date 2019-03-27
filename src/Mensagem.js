import React ,{Component} from 'react'
import {Segment, Grid} from "semantic-ui-react"

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
        let typeBubble = false
        let colorBubble = 'grey'
        let user = this.props.mensagem.email
        if(this.props.mensagem.UserId === this.props.user.uid)
        {
            typeBubble=true
            isMine='right'
            colorBubble = 'teal'
        }

        return (
            <Grid.Column floated={isMine} >
                 <Segment inverted={typeBubble} color={colorBubble} className="">
                     {typeBubble !== true && <p><b>{user}</b></p>}
                     {this.props.mensagem.texto}
                     <p style={{width:'100%'}} className="textoHoraEstilo">{this.props.mensagem.hora} </p>
                 </Segment>
            </Grid.Column>
        );
    }
}
export default Mensagem