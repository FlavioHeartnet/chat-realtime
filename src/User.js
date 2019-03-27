import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

const User = props=>{

    return(
        <div>
            <Segment inverted>Logado como: {props.email}</Segment>
            <Button basic color={'red'} onClick={props.logout} >Sair</Button>
            <br/><br/>
        </div>

    )
}
export default User;